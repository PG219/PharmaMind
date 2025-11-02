const MolecularBackground = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
      <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
        <defs>
          {/* Benzene Ring */}
          <g id="benzene">
            <circle cx="0" cy="-20" r="3" fill="hsl(160, 70%, 45%)" opacity="0.4" />
            <circle cx="17" cy="-10" r="3" fill="hsl(160, 70%, 45%)" opacity="0.4" />
            <circle cx="17" cy="10" r="3" fill="hsl(160, 70%, 45%)" opacity="0.4" />
            <circle cx="0" cy="20" r="3" fill="hsl(160, 70%, 45%)" opacity="0.4" />
            <circle cx="-17" cy="10" r="3" fill="hsl(160, 70%, 45%)" opacity="0.4" />
            <circle cx="-17" cy="-10" r="3" fill="hsl(160, 70%, 45%)" opacity="0.4" />
            <line x1="0" y1="-20" x2="17" y2="-10" stroke="hsl(160, 70%, 45%)" strokeWidth="1.5" opacity="0.3" />
            <line x1="17" y1="-10" x2="17" y2="10" stroke="hsl(160, 70%, 45%)" strokeWidth="1.5" opacity="0.3" />
            <line x1="17" y1="10" x2="0" y2="20" stroke="hsl(160, 70%, 45%)" strokeWidth="1.5" opacity="0.3" />
            <line x1="0" y1="20" x2="-17" y2="10" stroke="hsl(160, 70%, 45%)" strokeWidth="1.5" opacity="0.3" />
            <line x1="-17" y1="10" x2="-17" y2="-10" stroke="hsl(160, 70%, 45%)" strokeWidth="1.5" opacity="0.3" />
            <line x1="-17" y1="-10" x2="0" y2="-20" stroke="hsl(160, 70%, 45%)" strokeWidth="1.5" opacity="0.3" />
          </g>

          {/* Caffeine-like structure */}
          <g id="caffeine">
            <circle cx="0" cy="0" r="3" fill="hsl(200, 70%, 50%)" opacity="0.4" />
            <circle cx="20" cy="0" r="3" fill="hsl(200, 70%, 50%)" opacity="0.4" />
            <circle cx="30" cy="15" r="3" fill="hsl(200, 70%, 50%)" opacity="0.4" />
            <circle cx="20" cy="30" r="3" fill="hsl(200, 70%, 50%)" opacity="0.4" />
            <circle cx="0" cy="30" r="3" fill="hsl(200, 70%, 50%)" opacity="0.4" />
            <circle cx="-10" cy="15" r="3" fill="hsl(200, 70%, 50%)" opacity="0.4" />
            <line x1="0" y1="0" x2="20" y2="0" stroke="hsl(200, 70%, 50%)" strokeWidth="1.5" opacity="0.3" />
            <line x1="20" y1="0" x2="30" y2="15" stroke="hsl(200, 70%, 50%)" strokeWidth="1.5" opacity="0.3" />
            <line x1="30" y1="15" x2="20" y2="30" stroke="hsl(200, 70%, 50%)" strokeWidth="1.5" opacity="0.3" />
            <line x1="20" y1="30" x2="0" y2="30" stroke="hsl(200, 70%, 50%)" strokeWidth="1.5" opacity="0.3" />
            <line x1="0" y1="30" x2="-10" y2="15" stroke="hsl(200, 70%, 50%)" strokeWidth="1.5" opacity="0.3" />
            <line x1="-10" y1="15" x2="0" y2="0" stroke="hsl(200, 70%, 50%)" strokeWidth="1.5" opacity="0.3" />
          </g>

          {/* DNA helix segment */}
          <g id="helix">
            <circle cx="0" cy="0" r="3" fill="hsl(270, 70%, 60%)" opacity="0.4" />
            <circle cx="15" cy="10" r="3" fill="hsl(270, 70%, 60%)" opacity="0.4" />
            <circle cx="0" cy="20" r="3" fill="hsl(270, 70%, 60%)" opacity="0.4" />
            <circle cx="15" cy="30" r="3" fill="hsl(270, 70%, 60%)" opacity="0.4" />
            <line x1="0" y1="0" x2="15" y2="10" stroke="hsl(270, 70%, 60%)" strokeWidth="1.5" opacity="0.3" />
            <line x1="15" y1="10" x2="0" y2="20" stroke="hsl(270, 70%, 60%)" strokeWidth="1.5" opacity="0.3" />
            <line x1="0" y1="20" x2="15" y2="30" stroke="hsl(270, 70%, 60%)" strokeWidth="1.5" opacity="0.3" />
          </g>

          {/* Simple chain */}
          <g id="chain">
            <circle cx="0" cy="0" r="3" fill="hsl(25, 100%, 60%)" opacity="0.4" />
            <circle cx="20" cy="-5" r="3" fill="hsl(25, 100%, 60%)" opacity="0.4" />
            <circle cx="40" cy="0" r="3" fill="hsl(25, 100%, 60%)" opacity="0.4" />
            <line x1="0" y1="0" x2="20" y2="-5" stroke="hsl(25, 100%, 60%)" strokeWidth="1.5" opacity="0.3" />
            <line x1="20" y1="-5" x2="40" y2="0" stroke="hsl(25, 100%, 60%)" strokeWidth="1.5" opacity="0.3" />
          </g>
        </defs>

        {/* Animated molecular structures */}
        <g className="animate-float-slow">
          <use href="#benzene" x="10%" y="15%" />
        </g>
        <g className="animate-float-medium" style={{ animationDelay: '1s' }}>
          <use href="#caffeine" x="85%" y="20%" />
        </g>
        <g className="animate-float-fast" style={{ animationDelay: '0.5s' }}>
          <use href="#helix" x="15%" y="75%" />
        </g>
        <g className="animate-float-slow" style={{ animationDelay: '2s' }}>
          <use href="#chain" x="80%" y="70%" />
        </g>
        <g className="animate-float-medium" style={{ animationDelay: '1.5s' }}>
          <use href="#benzene" x="45%" y="10%" />
        </g>
        <g className="animate-float-fast" style={{ animationDelay: '0.8s' }}>
          <use href="#caffeine" x="55%" y="85%" />
        </g>
        <g className="animate-float-slow" style={{ animationDelay: '2.5s' }}>
          <use href="#helix" x="90%" y="45%" />
        </g>
        <g className="animate-float-medium" style={{ animationDelay: '0.3s' }}>
          <use href="#chain" x="5%" y="50%" />
        </g>
      </svg>
    </div>
  );
};

export default MolecularBackground;