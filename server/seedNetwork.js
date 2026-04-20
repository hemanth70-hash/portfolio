process.env.NODE_TLS_REJECT_UNAUTHORIZED = '0';
require('dotenv').config();
const { Pool } = require('pg');

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: true
});

const seedData = async () => {
  try {
    console.log("Injecting Network Data...");

    await pool.query(`
      INSERT INTO network (name, designation, experience, description, skills, avatar_url) VALUES 
      ('Rahul Sharma', 'Frontend Engineer', '3 Years', 'Collaborated on several React-based UI architectures. Specializes in performance optimization and responsive design systems.', ARRAY['React', 'Tailwind', 'TypeScript'], ''),
      ('Aditya Verma', 'Backend Developer', '4 Years', 'Partnered on database structuring for the mock test infrastructure. Highly skilled in building secure, scalable REST APIs.', ARRAY['Node.js', 'PostgreSQL', 'Express'], ''),
      ('Priya Patel', 'UI/UX Designer', '2 Years', 'Provided wireframes and user flow diagrams for recent interactive projects. Expert in creating accessible, user-centric interfaces.', ARRAY['Figma', 'Prototyping', 'Wireframing'], '')
    `);

    console.log("-> Network Data Successfully Uploaded!");
  } catch (err) {
    console.error("Injection failed:", err.message);
  } finally {
    pool.end();
  }
};

seedData();