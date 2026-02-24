import { dataSource } from '../config/typeorm.config';

async function clear() {
  await dataSource.initialize();
  console.log('Connection initialized. Clearing tables...');

  // Replace these with your actual table names from the DB
  const tables = [
    'users',
    'companies',
    'articles',
    'education',
    'experiences',
    'interview',
    'jobs',
    'offer',
    'portfolios',
    'applicants',
    'applications',
    'skills',
  ];
  const query =
    'TRUNCATE TABLE ' + tables.join(', ') + ' RESTART IDENTITY CASCADE;';
  console.log(query);

  await dataSource.query(query);
  console.log('Cleanup complete.');
  await dataSource.destroy();
}

clear();
