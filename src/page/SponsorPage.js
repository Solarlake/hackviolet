import React, { useState } from 'react';
import HeaderText from "../asset/image/hackviolet_text_gradient.png";
import FooterBlob from "../asset/image/footer_blob.png";
import Logo from "../asset/image/hackviolet_text.png";
import Footer from "../component/Footer";
import "../style/SponsorPage.scss";
import Blob from "../asset/svg/blob.svg";

const SponsorPage = () => {
  const [hoveredRow, setHoveredRow] = useState(null);

  // Column colors - each column one color
  const columnColors = [
    '#f0f9ff',
    '#F3E6FA',
    '#E6E1FA', 
    '#F3E6FA', 
    '#E6E1FA'  
  ];

  // Category colors for first row
  const categoryColors = [
    '#f0f9ff', 
    '#F3E6FA',
    '#E6E1FA',
    '#F3E6FA', 
    '#E6E1FA'  
  ];

  // Tooltip descriptions for row labels
  const tooltipDescriptions = {
    'Distribute swag': 'Opportunity to distribute company-branded merchandise to participants',
    'Newsletter': 'Company mention in our newsletters to participants',
    'Logo on website/t-shirt/presentation': 'Logo placement on event website, t-shirts, and presentation slides',
    'Logo on event posters': 'Logo featured on event posters and promotional materials',
    'Sponsored snack/meal': 'Company-sponsored snack or meal for participants',
    'Instagram post slide count': 'Number of slides featuring your company in our Instagram posts',
    'Instagram story': 'Company mention in our Instagram stories',
    'Instagram takeover': 'Opportunity for your company to take over our Instagram account for a day',
    '"HackViolet powered by"': '"Powered by HackViolet" mention in event materials and communications',
    'Sponsor fair': 'Dedicated space at the fair for company representatives to engage with participants',
    'Resume book access': 'Access to a collection of participant resumes for recruitment purposes',
    'Interview suite': 'Private interview suite for conducting interviews with participants',
    'Send in-person mentors': 'Opportunity to send company representatives to mentor participants in person',
    'Sponsor lounge': 'Access to a dedicated sponsor lounge for networking and relaxation',
    'Discord channel': 'Company-specific Discord channel for direct communication with participants',
    'Sponsored prize category': 'Sponsor a specific prize category and provide prizes for winners',
    'Company panel': 'Your company can volunteer an employee to be a part of our panel and join in answering hackers questions, sharing stories, and discussing tech.',
    'Sponsor table': 'Dedicated table at the event for company representatives to engage with participants',
    'Technical workshop or fun event': 'Opportunity to host a technical workshop or fun event during the hackathon',
    'Raffle prize after your event': 'Opportunity to provide a raffle prize after your sponsored event',
    'In-person judging': 'By default, final project demos for all prize categories are virtual. However, projects submitted to a Violet sponsor’s prize category will be presented in-person to that company’s representatives.',
    'Opening statement': 'Buy-in for $200 per minute of speaking at opening ceremony; 2 mins max',
    'Closing remarks': 'Buy-in for $400 per minute of speaking time at closing ceremony; 4 mins max'
  };

  const tableStyle = {
    margin: '0 auto',
    borderCollapse: 'collapse',
    width: '55%',
    marginBottom: '60px',
  };

  const cellStyle = {
    border: '3px solid #ECF7FF',
    padding: '10px',
    textAlign: 'center',
    position: 'relative',
    width: '250px',
    lineHeight: '1.2',
  };

  const tooltipStyle = {
    position: 'absolute',
    background: 'rgba(17, 24, 39, 0.95)',
    backdropFilter: 'blur(10px)',
    color: 'white',
    padding: '8px 10px',
    borderRadius: '12px',
    fontSize: '13px',
    fontWeight: '400',
    lineHeight: '1.4',
    width: '220px',
    zIndex: 1000,
    top: '50%',
    right: '100%',
    transform: 'translateY(-50%)',
    marginRight: '8px',
    border: '1px solid rgba(255, 255, 255, 0.1)',
    animation: 'fadeInLeft 0.15s ease-out'
  };

  //lightning bolt svg
  const Light = ({ size = 16, color = '#070f1dff' }) => (
  <div style={{ 
    display: 'flex', 
    alignItems: 'center', 
    justifyContent: 'center',
    width: '100%',
    height: '100%'
  }}>
    <svg 
      width={size} 
      height={size} 
      viewBox="0 0 24 24" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
    >
      <path 
        d="M13 2L3 14h6l-1 8 10-12h-6l1-8z" 
        fill={color}
        stroke={color}
        strokeWidth="1"
        strokeLinejoin="round"
      />
    </svg>
  </div>
);


  const InfoIcon = ({ label, rowIndex }) => (
    <div
      style={{ display: 'inline-flex', alignItems: 'center', cursor: 'help' }}
      onMouseEnter={() => setHoveredRow(rowIndex)}
      onMouseLeave={() => setHoveredRow(null)}
    >
      <span style={{ 
        fontSize: '14px', 
        color: '#070d18ff',
        fontWeight: 'bold',
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
        width: '18px',
        height: '18px',
        textAlign: 'center',
        border: '1px solid #040b1bff',
        borderRadius: '50%',
        marginRight: '8px'
      }}>i</span>
      <span>{label}</span>
      {hoveredRow === rowIndex && (
        <div style={tooltipStyle}>
          {tooltipDescriptions[label]}
        </div>
      )}
    </div>
  );

  // Branding benefits data
  const brandingData = [
    ['Distribute swag', <Light />, <Light />, <Light />, <Light />],
    ['Newsletter', 'mention', 'mention', 'spotlight', 'spotlight'],
    ['Logo on website/t-shirt/presentation', 'small', 'medium', 'large', 'extra large'],
    ['Logo on event posters', '', 'small', 'medium', 'large'],
    ['Sponsored snack/meal', '', '', 'snack', 'meal'],
    ['Instagram post slide count', '1', '2', '3', '4'],
    ['Instagram story', '', '1', '1', '2'],
    ['Instagram takeover', '', '', '', '1'],
    ['"HackViolet powered by"', '', '', '', <Light />]
  ];

  // Recruitment benefits data
  const recruitmentData = [
    ['Sponsor fair', <Light />, <Light />, <Light />, <Light />],
    ['Resume book access', '', 'post-event', 'post-event', 'early access'],
    ['Interview suite', '', '', '', <Light />]
  ];

  // Event presence benefits data
  const eventPresenceData = [
    ['Send in-person mentors', <Light />, <Light />, <Light />, <Light />],
    ['Sponsor lounge', 'shared', 'shared', 'private', 'private'],
    ['Discord channel', <Light />, <Light />, <Light />, <Light />],
    ['Sponsored prize category', <Light />, <Light />, <Light />, <Light />],
    ['Company panel', '', <Light />, <Light />, <Light />],
    ['Sponsor table', '1', '1', '2', '2 & prime spot'],
    ['Technical workshop or fun event', '30 minutes', '30 minutes', '60 minutes', '2 sessions- 30 min. & 60 min.'],
    ['Raffle prize after your event','','', <Light />,<Light />],
    ['In-person judging', '', '', '', <Light />],
    ['Opening statement', 'buy-in', 'buy-in', 'buy-in', '2 minutes'],
    ['Closing remarks', 'buy-in', 'buy-in', 'buy-in', '5 minutes']
  ];

  return (
    <div style={{ minHeight: '100vh', paddingTop: '60px' }}>

      <style>{`
        @keyframes fadeInLeft {
          from {
            opacity: 0;
            transform: translateY(-50%) translateX(4px);
          }
          to {
            opacity: 1;
            transform: translateY(-50%) translateX(0);
          }
        }
        .table-top-left { border-top-left-radius: 20px; }
        .table-top-right { border-top-right-radius: 20px; }
        .table-bottom-left { border-bottom-left-radius: 20px; }
        .table-bottom-right { border-bottom-right-radius: 20px; }
        .theme-group-1 td:first-child { border-top-left-radius: 10px; }
        .theme-group-1 td:last-child { border-top-right-radius: 10px; }
        .theme-group-1-last td:first-child { border-bottom-left-radius: 10px; }
        .theme-group-1-last td:last-child { border-bottom-right-radius: 10px; }
        .theme-group-2 td:first-child { border-top-left-radius: 10px; }
        .theme-group-2 td:last-child { border-top-right-radius: 10px; }
        .theme-group-2-last td:first-child { border-bottom-left-radius: 10px; }
        .theme-group-2-last td:last-child { border-bottom-right-radius: 10px; }
        .theme-group-3 td:first-child { border-top-left-radius: 10px; }
        .theme-group-3 td:last-child { border-top-right-radius: 10px; }
        .theme-group-3-last td:first-child { border-bottom-left-radius: 10px; }
        .theme-group-3-last td:last-child { border-bottom-right-radius: 10px; }
      `}</style>

      { /* Header section */}

      <div className="sponsor-header">
        <h1>Become a HackViolet Partner</h1>
        <img src={Blob} alt="" className="sponsor-blob" />
        </div>

        <div style={{ 
          maxWidth: '800px', 
          margin: '0 auto 40px auto', 
          padding: '0 20px',
          lineHeight: '1.6',
          color: '#02060bff',
          marginTop: '100px',
          
        }}>
            <p style={{ marginBottom: '10px' }}>HackViolet is an annual 24-hour female-empowerment in-person hackathon at Virginia Tech, scheduled for 
                January 31 to February 1, 2026. While we operate and are funded independently, we share a mission with our
                 sister organization, Association for Women in Computing (AWC): to support and uplift women in technology.
            </p>
            <p style={{ marginBottom: '10px' }}>
                HackViolet serves as a unique platform to empower young women in the traditionally male-dominated tech industry.
                 Our event offers participants invaluable opportunities to develop new skills, build mentor relationships, and engage within a 
                 supportive community. We warmly welcome all participants — regardless of gender identity and field of study — to showcase
                  their creativity and make an impact in the world of technology.
            </p>
            <p style={{ marginBottom: '10px',fontSize: '1.2em' }}>
                <strong>WHY SPONSOR HACKVIOLET?</strong>
            </p>
            <p style={{ marginBottom: '10px' }}>
                As a sponsor, you'll have the opportunity to:
            </p>
            <ul style={{ color:"blue"}}>
                <li>Increase brand visibility through event promotional materials</li>
                <li>Showcase your technology and services to engaged participants</li>
                <li>Connect directly with top emerging talent</li>
                <li>Demonstrate your commitment to corporate social responsibility</li>
            </ul>
            <p style={{ marginBottom: '10px', marginTop: '20px', fontSize: '1.2em' }}><strong>JOIN US IN 2026!</strong></p>
            <p style={{ marginBottom: '10px' }}>Partner with us to help shape the careers of young innovators and drive the
                 future of technology in a safe, inclusive direction!  Explore our sponsorship
                  tiers and reach out to become an official HackViolet 2026 sponsor!</p>
            <p>
              Thank you for your time,
            </p>
            <p>
              HackViolet Board
            </p>
        </div>

      <table style={tableStyle}>
        <tbody>
          {/* First category row*/}
          <tr>
            {['TIER', 'LAVENDER', 'LILAC', 'ORCHID', 'VIOLET'].map((cat, index) => (
              <td key={index} className={`${index === 0 ? 'table-top-left' : ''} ${index === 4 ? 'table-top-right' : ''}`} style={{
                ...cellStyle,
                backgroundColor: categoryColors[index],
                color: '#1F2937',
                fontWeight: 'bold'
              }}>
                {cat}
              </td>
            ))}
          </tr>

          {/* Second category row*/}
          <tr>
            {['PRICE', '$1500', '$3000', '$4500', '$6000'].map((cat, index) => (
              <td key={index} style={{
                ...cellStyle,
                backgroundColor: categoryColors[index],
                color: '#1F2937',
                fontWeight: 'bold'
              }}>
                {cat}
              </td>
            ))}
          </tr>

          {/* BRANDING header */}
          <tr className="theme-group-1">
            <td style={{
              ...cellStyle,
              backgroundColor: columnColors[0],
              fontWeight: 'bold',
              textAlign: 'left'
            }}>
              BRANDING
            </td>
            <td style={{ ...cellStyle, backgroundColor: columnColors[1] }}></td>
            <td style={{ ...cellStyle, backgroundColor: columnColors[2] }}></td>
            <td style={{ ...cellStyle, backgroundColor: columnColors[3] }}></td>
            <td style={{ ...cellStyle, backgroundColor: columnColors[4] }}></td>
          </tr>

          {/* Branding rows */}
          {brandingData.map((row, i) => (
            <tr key={`group1-${i}`} className={i === brandingData.length - 1 ? 'theme-group-1-last' : ''}>
              <td style={{
                ...cellStyle,
                backgroundColor: columnColors[0],
                textAlign: 'left'
              }}>
                <InfoIcon label={row[0]} rowIndex={`group1-${i}`} />
              </td>
              <td style={{ ...cellStyle, backgroundColor: columnColors[1] }}>{row[1]}</td>
              <td style={{ ...cellStyle, backgroundColor: columnColors[2] }}>{row[2]}</td>
              <td style={{ ...cellStyle, backgroundColor: columnColors[3] }}>{row[3]}</td>
              <td style={{ ...cellStyle, backgroundColor: columnColors[4] }}>{row[4]}</td>
            </tr>
          ))}

          {/* Spacing row */}
          <tr style={{ height: '10px' }}>
            <td colSpan="5" style={{ border: 'none', padding: '0' }}></td>
          </tr>

          {/* RECRUITMENT header */}
          <tr className="theme-group-2">
            <td style={{
              ...cellStyle,
              backgroundColor: columnColors[0],
              fontWeight: 'bold',
              textAlign: 'left'
            }}>
              RECRUITMENT
            </td>
            <td style={{ ...cellStyle, backgroundColor: columnColors[1] }}></td>
            <td style={{ ...cellStyle, backgroundColor: columnColors[2] }}></td>
            <td style={{ ...cellStyle, backgroundColor: columnColors[3] }}></td>
            <td style={{ ...cellStyle, backgroundColor: columnColors[4] }}></td>
          </tr>

          {/* Recruitment rows */}
          {recruitmentData.map((row, i) => (
            <tr key={`group2-${i}`} className={i === recruitmentData.length - 1 ? 'theme-group-2-last' : ''}>
              <td style={{
                ...cellStyle,
                backgroundColor: columnColors[0],
                textAlign: 'left'
              }}>
                <InfoIcon label={row[0]} rowIndex={`group2-${i}`} />
              </td>
              <td style={{ ...cellStyle, backgroundColor: columnColors[1] }}>{row[1]}</td>
              <td style={{ ...cellStyle, backgroundColor: columnColors[2] }}>{row[2]}</td>
              <td style={{ ...cellStyle, backgroundColor: columnColors[3] }}>{row[3]}</td>
              <td style={{ ...cellStyle, backgroundColor: columnColors[4] }}>{row[4]}</td>
            </tr>
          ))}

          {/* Spacing row */}
          <tr style={{ height: '10px' }}>
            <td colSpan="5" style={{ border: 'none', padding: '0' }}></td>
          </tr>

          {/* EVENT PRESENCE header */}
          <tr>
            <td style={{
              ...cellStyle,
              backgroundColor: columnColors[0],
              fontWeight: 'bold',
              textAlign: 'left'
            }}>
              EVENT PRESENCE
            </td>
            <td style={{ ...cellStyle, backgroundColor: columnColors[1] }}></td>
            <td style={{ ...cellStyle, backgroundColor: columnColors[2] }}></td>
            <td style={{ ...cellStyle, backgroundColor: columnColors[3] }}></td>
            <td style={{ ...cellStyle, backgroundColor: columnColors[4] }}></td>
          </tr>

          {/* Event Presence rows */}
          {eventPresenceData.map((row, i) => (
            <tr key={`group3-${i}`} className={i === eventPresenceData.length - 1 ? 'last-row' : ''}>
              <td className={i === eventPresenceData.length - 1 ? 'table-bottom-left' : ''} style={{
                ...cellStyle,
                backgroundColor: columnColors[0],
                textAlign: 'left'
              }}>
                <InfoIcon label={row[0]} rowIndex={`group3-${i}`} />
              </td>
              <td style={{ ...cellStyle, backgroundColor: columnColors[1] }}>{row[1]}</td>
              <td style={{ ...cellStyle, backgroundColor: columnColors[2] }}>{row[2]}</td>
              <td style={{ ...cellStyle, backgroundColor: columnColors[3] }}>{row[3]}</td>
              <td className={i === eventPresenceData.length - 1 ? 'table-bottom-right' : ''} style={{ ...cellStyle, backgroundColor: columnColors[4] }}>{row[4]}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="sponsor-footer">
        <div className='sponsor-footer-comp'><Footer /></div>
                <img className="sponsor-footer_blob" src={FooterBlob} alt="" />
            </div>
    </div>
  );
};

const FeatureRow = ({ title, values }) => (
    <div className="row">
        <div className="cell feature-label">
            <span>{title}</span>
        </div>
        {values.map((val, index) => (
            <div className="cell" key={index}>{val}</div>
        ))}
    </div>
);

export default SponsorPage;