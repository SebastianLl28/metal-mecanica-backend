const listCustomer = [
  {
    name: 'José Pedro',
    lastName: 'Pascal',
    email: 'josepascal@gmail.com',
    address: 'Av. Las Ortigas 234',
    phone: '987654321',
    identification: '75678120'
  },
  {
    name: 'Maria',
    lastName: 'Rodriguez',
    email: 'maria.rodriguez@example.com',
    address: 'Calle del Sol 123',
    phone: '987654321',
    identification: '89012345'
  },
  {
    name: 'John',
    lastName: 'Doe',
    email: 'john.doe@example.com',
    address: '123 Main Street',
    phone: '987654321',
    identification: '67890123'
  },
  {
    name: 'Alice',
    lastName: 'Johnson',
    email: 'alice.johnson@example.com',
    address: '456 Oak Avenue',
    phone: '987654321',
    identification: '34567890'
  },
  {
    name: 'Carlos',
    lastName: 'Gonzalez',
    email: 'carlos.gonzalez@example.com',
    address: '789 Elm Lane',
    phone: '987654321',
    identification: '12345678'
  },
  {
    name: 'Christian',
    lastName: 'Perez',
    email: 'christian.perez@example.com',
    address: '321 Maple Street',
    phone: '987654321',
    identification: '123456789451'
  },
  {
    name: 'Ana',
    lastName: 'García',
    email: 'ana.garcia@example.com',
    address: '456 Oak Avenue',
    phone: '123456789',
    identification: '789012345612'
  },
  {
    name: 'Ricardo',
    lastName: 'Martínez',
    email: 'ricardo.martinez@example.com',
    address: '789 Elm Lane',
    phone: '987654321',
    identification: '456789012373'
  },
  {
    name: 'Elena',
    lastName: 'Sánchez',
    email: 'elena.sanchez@example.com',
    address: '123 Pine Road',
    phone: '987294789',
    identification: '890123456124'
  },
  {
    name: 'Diego',
    lastName: 'López',
    email: 'diego.lopez@example.com',
    address: '567 Cedar Drive',
    phone: '963258741',
    identification: '234567890435'
  },
  {
    name: 'Pedro SAC',
    email: 'pedrosac@gmail.com',
    address: 'Av. Proceres 567',
    phone: '963258741',
    ruc: '11235412541'
  },
  {
    name: 'Tech Innovations S.A.',
    email: 'info@techinnovations.com',
    address: 'Calle Tecno 123',
    phone: '789456123',
    ruc: '23456789012'
  },
  {
    name: 'Green Energy Solutions SAC',
    email: 'contact@greenenergy.com',
    address: 'Eco Street 456',
    phone: '987654321',
    ruc: '34567890123'
  },
  {
    name: 'Express Logistics Peru S.A.C.',
    email: 'info@expresslogistics.com',
    address: 'Fast Lane 789',
    phone: '654321987',
    ruc: '45678901234'
  },
  // asdasd
  {
    name: 'Gherson Bruce',
    lastName: 'Rivadeneira Aliaga',
    email: 'bruce@example.com',
    address: '456 Oak Avenue',
    phone: '123456789',
    identification: '789012345612'
  },
  {
    name: 'Alice',
    lastName: 'Johnson',
    email: 'alice.johnson@example.com',
    address: '123 Elm Street',
    phone: '5551112233',
    identification: '456789012345'
  },
  {
    name: 'Bob',
    lastName: 'Miller',
    email: 'bob.miller@example.com',
    address: '789 Cedar Avenue',
    phone: '9876543210',
    identification: '789012345678'
  },
  {
    name: 'Eva',
    lastName: 'Williams',
    email: 'eva.williams@example.com',
    address: '567 Birch Road',
    phone: '1234567890',
    identification: '234567890123'
  },
  {
    name: 'David',
    lastName: 'Brown',
    email: 'david.brown@example.com',
    address: '890 Pine Street',
    phone: '5556667777',
    identification: '678901234567'
  },
  {
    name: 'Grace',
    lastName: 'Taylor',
    email: 'grace.taylor@example.com',
    address: '234 Oak Lane',
    phone: '1112223333',
    identification: '345678901234'
  },
  {
    name: 'Michael',
    lastName: 'Clark',
    email: 'michael.clark@example.com',
    address: '567 Pine Avenue',
    phone: '3334445555',
    identification: '890123456789'
  },
  {
    name: 'Samantha',
    lastName: 'Walker',
    email: 'samantha.walker@example.com',
    address: '123 Birch Lane',
    phone: '7778889999',
    identification: '012345678901'
  },
  {
    name: 'Daniel',
    lastName: 'Wright',
    email: 'daniel.wright@example.com',
    address: '456 Cedar Road',
    phone: '2223334444',
    identification: '789012345678'
  },
  {
    name: 'Olivia',
    lastName: 'Roberts',
    email: 'olivia.roberts@example.com',
    address: '789 Oak Street',
    phone: '4445556666',
    identification: '901234567890'
  },
  {
    name: 'Ryan',
    lastName: 'Harrison',
    email: 'ryan.harrison@example.com',
    address: '890 Maple Lane',
    phone: '6667778888',
    identification: '123456789012'
  },
  {
    name: 'Sophia',
    lastName: 'Carter',
    email: 'sophia.carter@example.com',
    address: '234 Elm Avenue',
    phone: '5556667777',
    identification: '234567890123'
  },
  {
    name: 'Ethan',
    lastName: 'Baker',
    email: 'ethan.baker@example.com',
    address: '678 Cedar Street',
    phone: '8889990000',
    identification: '345678901234'
  },
  {
    name: 'Ava',
    lastName: 'Perez',
    email: 'ava.perez@example.com',
    address: '345 Pine Road',
    phone: '1112223333',
    identification: '456789012345'
  },
  {
    name: 'Matthew',
    lastName: 'Gonzalez',
    email: 'matthew.gonzalez@example.com',
    address: '456 Elm Lane',
    phone: '9990001111',
    identification: '567890123456'
  },
  {
    name: 'Emma',
    lastName: 'Fisher',
    email: 'emma.fisher@example.com',
    address: '789 Birch Street',
    phone: '2223334444',
    identification: '678901234567'
  },
  {
    name: 'Data Solutions LLC',
    email: 'info@datasolutions.com',
    address: 'Data Street 456',
    phone: '123456789',
    ruc: '34567890123'
  },
  {
    name: 'InnoTech Enterprises Inc.',
    email: 'contact@innotech.com',
    address: 'Innovation Avenue 789',
    phone: '987654321',
    ruc: '45678901234'
  },
  {
    name: 'Global Dynamics Ltd.',
    email: 'info@globaldynamics.com',
    address: 'Global Square 567',
    phone: '555666777',
    ruc: '56789012345'
  },
  {
    name: 'Future Systems Corporation',
    email: 'info@futuresystems.com',
    address: 'Futuristic Lane 890',
    phone: '111222333',
    ruc: '67890123456'
  },
  {
    name: 'TechHub Innovations',
    email: 'contact@techhubinnovations.com',
    address: 'Tech Street 123',
    phone: '999000111',
    ruc: '78901234567'
  },
  {
    name: 'EcoSolutions Group',
    email: 'info@ecosolutionsgroup.com',
    address: 'Eco Avenue 234',
    phone: '333444555',
    ruc: '89012345678'
  },
  {
    name: 'Strategic Technologies Ltd.',
    email: 'contact@strategictech.com',
    address: 'Strategy Lane 345',
    phone: '666777888',
    ruc: '90123456789'
  },
  {
    name: 'InnoData Systems Inc.',
    email: 'info@innodata.com',
    address: 'Inno Square 678',
    phone: '777888999',
    ruc: '01234567890'
  },
  {
    name: 'Synthetics Innovate LLC',
    email: 'info@syntheticsinnovate.com',
    address: 'Synthetics Street 901',
    phone: '444555666',
    ruc: '12345678901'
  },
  {
    name: 'NexGen Solutions Ltd.',
    email: 'contact@nexgensolutions.com',
    address: 'NexGen Avenue 234',
    phone: '222333444',
    ruc: '23456789012'
  }
]

export default listCustomer
