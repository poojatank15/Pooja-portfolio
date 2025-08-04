import React from 'react';

// Import JSON data
import academicProjects from './AcademicProjects.json';
import address from './Address.json';
import certifications from './certification.json';
import emergencyContact from './Emergencycontat.json';
import languageSkills from './LanguageSkills.json';
import socialLinks from './SocialProfile.json';

// CSS styles
const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: '20px',
    fontFamily: 'Arial, sans-serif',
    maxWidth: '800px',
    margin: '0 auto'
  },
  card: {
    width: '100%',
    border: '1px solid #e0e0e0',
    borderRadius: '10px',
    padding: '25px',
    margin: '15px 0',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    backgroundColor: '#ffffff'
  },
  sectionTitle: {
    color: '#2c3e50',
    borderBottom: '2px solid #3498db',
    paddingBottom: '8px',
    marginBottom: '20px',
    textAlign: 'center'
  },
  listItem: {
    marginBottom: '15px',
    padding: '10px',
    backgroundColor: '#f8f9fa',
    borderRadius: '5px'
  }
};

function App() {
  return (
    <div style={styles.container}>
      <h1 style={{ textAlign: 'center', marginBottom: '30px', color: '#2c3e50' }}>Professional Profile</h1>

      {/* Academic Projects */}
      <div style={styles.card}>
        <h2 style={styles.sectionTitle}>Academic Projects</h2>
        <ul style={{ listStyleType: 'none', padding: 0 }}>
          {academicProjects.map((project, index) => (
            <li key={index} style={styles.listItem}>
              <h3 style={{ color: '#3498db', marginBottom: '5px' }}>{project.title}</h3>
              <p><strong>Tech Stack:</strong> {project.techStack.join(', ')}</p>
              <p><strong>Description:</strong> {project.description}</p>
              <p><strong>Outcome:</strong> {project.outcome}</p>
            </li>
          ))}
        </ul>
      </div>

      {/* Address */}
      <div style={styles.card}>
        <h2 style={styles.sectionTitle}>Address</h2>
        <div style={{ display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap' }}>
          <div style={{ flex: 1, minWidth: '300px', marginRight: '20px' }}>
            <h3 style={{ color: '#3498db' }}>Permanent Address</h3>
            <ul style={{ paddingLeft: '20px' }}>
              <li><strong>Street:</strong> {address.permanent.street}</li>
              <li><strong>Village:</strong> {address.permanent.village}</li>
              <li><strong>Taluka:</strong> {address.permanent.taluka}</li>
              <li><strong>City:</strong> {address.permanent.city}</li>
              <li><strong>State:</strong> {address.permanent.state}</li>
              <li><strong>Pin Code:</strong> {address.permanent["pin-code"]}</li>
            </ul>
          </div>
          <div style={{ flex: 1, minWidth: '300px' }}>
            <h3 style={{ color: '#3498db' }}>Current Address</h3>
            <ul style={{ paddingLeft: '20px' }}>
              <li><strong>Street:</strong> {address.current.street}</li>
              <li><strong>Village:</strong> {address.current.village}</li>
              <li><strong>Taluka:</strong> {address.current.taluka}</li>
              <li><strong>City:</strong> {address.current.city}</li>
              <li><strong>State:</strong> {address.current.state}</li>
              <li><strong>Pin Code:</strong> {address.current["pin-code"]}</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Certifications */}
      <div style={styles.card}>
        <h2 style={styles.sectionTitle}>Certifications</h2>
        <ul style={{ listStyleType: 'none', padding: 0 }}>
          {certifications.map((cert, index) => (
            <li key={index} style={styles.listItem}>
              <h3 style={{ color: '#3498db', marginBottom: '5px' }}>{cert.courseName}</h3>
              <p><strong>Platform:</strong> {cert.platform}</p>
              <p><strong>Date:</strong> {cert.date}</p>
              <p><strong>Credential URL:</strong> <a href={cert.credentialURL} target="_blank" rel="noopener noreferrer">{cert.credentialURL}</a></p>
            </li>
          ))}
        </ul>
      </div>

      {/* Emergency Contact */}
      <div style={styles.card}>
        <h2 style={styles.sectionTitle}>Emergency Contact</h2>
        <div style={styles.listItem}>
          <p><strong>Name:</strong> {emergencyContact.name}</p>
          <p><strong>Relation:</strong> {emergencyContact.relation}</p>
          <p><strong>Phone:</strong> {emergencyContact.phone}</p>
          <h3 style={{ color: '#3498db', marginTop: '15px' }}>Address:</h3>
          <ul style={{ paddingLeft: '20px' }}>
            <li><strong>Street:</strong> {emergencyContact.address.street}</li>
            <li><strong>City:</strong> {emergencyContact.address.city}</li>
            <li><strong>State:</strong> {emergencyContact.address.state}</li>
            <li><strong>Pin Code:</strong> {emergencyContact.address["pin-code"]}</li>
          </ul>
        </div>
      </div>

      {/* Language Skills */}
      <div style={styles.card}>
        <h2 style={styles.sectionTitle}>Language Skills</h2>
        <div style={{ display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap' }}>
          <div style={{ flex: 1, minWidth: '300px', marginRight: '20px' }}>
            <h3 style={{ color: '#3498db' }}>Spoken</h3>
            <ul style={{ paddingLeft: '20px' }}>
              {languageSkills.spoken.map((language, index) => (
                <li key={index}>
                  <p><strong>{language.language}:</strong> {language.level}</p>
                </li>
              ))}
            </ul>
          </div>
          <div style={{ flex: 1, minWidth: '300px' }}>
            <h3 style={{ color: '#3498db' }}>Written</h3>
            <ul style={{ paddingLeft: '20px' }}>
              {languageSkills.written.map((language, index) => (
                <li key={index}>
                  <p><strong>{language.language}:</strong> {language.level}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Social Links */}
      <div style={styles.card}>
        <h2 style={styles.sectionTitle}>Social Links</h2>
        <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
          {Object.keys(socialLinks).map((key, index) => (
            <a 
              key={index}
              href={socialLinks[key]} 
              target="_blank" 
              rel="noopener noreferrer"
              style={{
                padding: '10px 15px',
                margin: '5px',
                backgroundColor: '#3498db',
                color: 'white',
                borderRadius: '5px',
                textDecoration: 'none'
              }}
            >
              {key}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
