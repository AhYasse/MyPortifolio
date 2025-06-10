import React from 'react';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import "react-circular-progressbar/dist/styles.css";

const percentage = 66;

<CircularProgressbar
  value={percentage}
  text={`${percentage}%`}
  styles={buildStyles({
    // Rotation of path and trail, in number of turns (0-1)
    rotation: 0.25,

    // Whether to use rounded or flat corners on the ends - can use 'butt' or 'round'
    strokeLinecap: 'butt',

    // Text size
    textSize: '16px',

    // How long animation takes to go from one percentage to another, in seconds
    pathTransitionDuration: 0.5,

    // Can specify path transition in more detail, or remove it entirely
    // pathTransition: 'none',

    // Colors
    pathColor: `rgba(62, 152, 199, ${percentage / 100})`,
    textColor: '#f88',
    trailColor: '#d6d6d6',
    backgroundColor: '#3e98c7',
  })}
/>;
function SkillProgressBar() {
  return (
    <div style={{ width: '190px', height: '190px' }}>
      <CircularProgressbar
        value={percentage}
        text={`${percentage}%`}
        styles={buildStyles({
          rotation: 0.25,
          strokeLinecap: 'butt',
          textSize: '24px',
          pathTransitionDuration: 0.5,
          pathColor:  `url(#gradient)`,
          textColor: 'rgb(163, 25, 85)',
          trailColor: 'rgba(126, 30, 71, 0.7)',
          backgroundColor: '#3e98c7',
        })}
      />
       <svg style={{ height: 0 }}>
                    <defs>
                        <linearGradient id="gradient" gradientTransform="rotate(90)">
                            <stop offset="0%" stopColor="#4c00ff" />
                            <stop offset="100%" stopColor="#7700ff" />
                        </linearGradient>
                    </defs>
                </svg>
    </div>
  );
}
export default React.memo(SkillProgressBar);
// This is a simple skill progress bar component using react-circular-progressbar.
// It displays a circular progress bar with a percentage value.
// You can customize the percentage value and styles as needed for your application.        