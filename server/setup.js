// THIS IS THE OVERRIDE COMMAND:
process.env.NODE_TLS_REJECT_UNAUTHORIZED = '0';

require('dotenv').config();
const { Pool } = require('pg');

// Initialize connection
const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: true // Simplified SSL flag
});

const executeSetup = async () => {
  try {
    console.log("Initiating Database Architecture...");

    // 1. Create Projects Table
    await pool.query(`
      CREATE TABLE IF NOT EXISTS projects (
          id SERIAL PRIMARY KEY,
          title VARCHAR(255) NOT NULL,
          description TEXT NOT NULL,
          tech_stack TEXT[] NOT NULL,
          github_link VARCHAR(255),
          live_link VARCHAR(255)
      );
    `);
    console.log("-> Projects table secured.");

    // 2. Create Network Table
    await pool.query(`
      CREATE TABLE IF NOT EXISTS network (
          id SERIAL PRIMARY KEY,
          name VARCHAR(255) NOT NULL,
          designation VARCHAR(255) NOT NULL,
          experience VARCHAR(50),
          description TEXT NOT NULL,
          skills TEXT[] NOT NULL,
          avatar_url VARCHAR(255)
      );
    `);
    console.log("-> Network table secured.");

    // 3. Create Certifications Table
    await pool.query(`
      CREATE TABLE IF NOT EXISTS certifications (
          id SERIAL PRIMARY KEY,
          name VARCHAR(255) NOT NULL,
          issuer VARCHAR(255) NOT NULL,
          year VARCHAR(50) NOT NULL,
          pdf_link VARCHAR(255) NOT NULL
      );
    `);
    console.log("-> Certifications table secured.");

    // 4. Inject Initial Resume Data
    await pool.query(`
      INSERT INTO certifications (name, issuer, year, pdf_link) 
      VALUES (
        'B.Tech Computer Science', 
        'SIET', 
        'Graduated', 
        'https://pub-45aac6b4ad1842298d92c4f3c9dd58db.r2.dev/HEMANTH%20ELIPE%20Resume%20(2).pdf'
      );
    `);
    console.log("-> Initial resume data injected into Certifications.");

    console.log("Database Architecture Setup Complete.");
    
  } catch (err) {
    console.error("Setup failed:", err.message);
  } finally {
    pool.end(); 
  }
};

executeSetup();