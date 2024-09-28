import { db } from '@vercel/postgres';
import { companies, projects } from '../lib/placeholder-data';

const client = await db.connect();

async function seedCompanies() {
  await client.sql`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`;
  await client.sql`
    CREATE TABLE IF NOT EXISTS companies (
      id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
      name VARCHAR(255) NOT NULL,
      position VARCHAR(255) NOT NULL,
      image_url VARCHAR(255) NOT NULL,
      info VARCHAR(500) NOT NULL,
      info_url VARCHAR(255) NOT NULL
    );
  `;
  console.log("Passed creating tablee")
  const insertedCompanies = await Promise.all(
    companies.map(async (company) => {
      return client.sql`
        INSERT INTO companies (id, name, position, image_url, info, info_url)
        VALUES (${company.id}, ${company.name}, ${company.position}, ${company.image_url}, ${company.info}, ${company.info_url})
        ON CONFLICT (id) DO NOTHING;
      `;
    }),
  );
  console.log("In companies")
  return insertedCompanies;
}

async function seedProjects() {
  await client.sql`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`;
  console.log("first")
  await client.sql`
    CREATE TABLE IF NOT EXISTS projects (
      id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
      title VARCHAR(255) NOT NULL,
      about VARCHAR(500) NOT NULL,
      tech VARCHAR(255) NOT NULL,
      site VARCHAR(100),
      github VARCHAR(100)
    );
  `;
  console.log("Passed creating projects table")
  const insertedProjects = await Promise.all(
    projects.map(async (project) => {
      return client.sql`
        INSERT INTO projects (title, about, tech, site, github)
        VALUES (${project.title}, ${project.about}, ${project.tech}, ${project.site}, ${project.github})
        ON CONFLICT (id) DO NOTHING;
      `;
    }),
  );
  console.log("In projects")
  return insertedProjects;
}

export async function GET() {
    try {
      await client.sql`BEGIN`;
      await seedCompanies();
      await seedProjects();
      await client.sql`COMMIT`;
  
      return Response.json({ message: 'Database seeded successfully' });
    } catch (error) {
      await client.sql`ROLLBACK`;
      return Response.json({ error }, { status: 500 });
    }
  }