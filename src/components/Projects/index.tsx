import { FC } from 'react';
import { projects } from '../../data/projects';

export const Projects: FC = () => {
  return (
    <div style={{ padding: '20px' }}>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
        {projects.map(({ title, description, image, github, website }) => (
          <div
            key={title}
            style={{
              flex: '1 0 calc(33.33% - 20px)', // Ensure items are 1/3 of the row width with margin adjustment
              boxSizing: 'border-box',
              margin: '10px',
              border: '1px solid #ddd',
              borderRadius: '8px',
              padding: '10px',
              textAlign: 'center',
              backgroundColor: '#fff',
            }}
          >
            <h2 style={{ fontSize: '1.5em', marginBottom: '10px' }}>{title}</h2>

            <a href={website} target="_blank" rel="noopener noreferrer">
              <img
                src={image}
                alt={title}
                style={{ width: '100%', height: 'auto', borderRadius: '8px' }}
              />
            </a>

            <p style={{ margin: '10px 0', fontSize: '1em', color: '#555' }}>
              {description}
            </p>

            <a href={github} target="_blank" rel="noopener noreferrer">
              <img
                src="/github.png"
                alt="GitHub Repository"
                style={{ width: '32px', height: '32px' }}
              />
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;