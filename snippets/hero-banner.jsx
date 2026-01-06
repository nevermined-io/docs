import { useState, useEffect, useRef } from 'react';

export const HeroBanner = ({
  label = "DOCUMENTATION",
  title,
  gradientText,
  description,
  ctaText = "Get Started Free",
  ctaHref = "https://nevermined.app/"
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const [videoLoaded, setVideoLoaded] = useState(false);
  const videoRef = useRef(null);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const playVideo = async () => {
      try {
        await video.play();
      } catch (error) {
        console.warn('Autoplay failed:', error);
      }
    };

    if (videoLoaded) {
      playVideo();
    }
  }, [videoLoaded]);

  const containerStyle = {
    position: 'relative',
    backgroundColor: '#0d3f48',
    borderRadius: '24px',
    padding: '48px 32px',
    marginBottom: '32px',
    overflow: 'hidden',
    minHeight: '320px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center'
  };

  const videoContainerStyle = {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    overflow: 'hidden'
  };

  const videoStyle = {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    opacity: isVisible ? 1 : 0,
    transition: 'opacity 1s ease-out'
  };

  const contentStyle = {
    position: 'relative',
    zIndex: 2,
    maxWidth: '600px'
  };

  const labelStyle = {
    color: 'white',
    fontSize: '12px',
    fontWeight: '600',
    letterSpacing: '2px',
    textTransform: 'uppercase',
    marginBottom: '16px',
    opacity: isVisible ? 0.9 : 0,
    transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
    transition: 'opacity 0.8s ease-out, transform 0.8s ease-out',
    transitionDelay: '0.1s'
  };

  const titleStyle = {
    fontSize: 'clamp(28px, 5vw, 48px)',
    fontWeight: '300',
    lineHeight: '1.1',
    marginBottom: '20px'
  };

  const gradientTextStyle = {
    display: 'block',
    background: 'linear-gradient(114.57deg, #bcdc4a 23%, #abe2dd 60%)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    backgroundClip: 'text',
    fontStyle: 'italic',
    opacity: isVisible ? 1 : 0,
    transform: isVisible ? 'translateY(0)' : 'translateY(30px)',
    transition: 'opacity 0.8s ease-out, transform 0.8s ease-out',
    transitionDelay: '0.2s'
  };

  const whiteTextStyle = {
    display: 'block',
    color: 'white',
    fontStyle: 'normal',
    opacity: isVisible ? 1 : 0,
    transform: isVisible ? 'translateY(0)' : 'translateY(30px)',
    transition: 'opacity 0.8s ease-out, transform 0.8s ease-out',
    transitionDelay: '0.35s'
  };

  const descriptionStyle = {
    color: 'rgba(255, 255, 255, 0.85)',
    fontSize: '16px',
    lineHeight: '1.6',
    marginBottom: '24px',
    maxWidth: '500px',
    opacity: isVisible ? 1 : 0,
    transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
    transition: 'opacity 0.8s ease-out, transform 0.8s ease-out',
    transitionDelay: '0.5s'
  };

  const buttonStyle = {
    display: 'inline-block',
    backgroundColor: 'white',
    color: '#0d3f48',
    padding: '12px 24px',
    borderRadius: '8px',
    fontSize: '14px',
    fontWeight: '600',
    textDecoration: 'none',
    transition: 'all 0.3s ease',
    border: 'none',
    cursor: 'pointer',
    opacity: isVisible ? 1 : 0,
    transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
    transitionDelay: '0.65s'
  };

  const animationStyles = `
    .nvm-hero-btn:hover {
      background-color: #f0f0f0;
      transform: translateY(-2px);
      box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
    }
  `;

  return (
    <>
      <style>{animationStyles}</style>
      <div style={containerStyle}>
        {/* Video background */}
        <div style={videoContainerStyle}>
          <video
            ref={videoRef}
            style={videoStyle}
            autoPlay
            loop
            muted
            playsInline
            poster="/images/product_hero.jpg"
            onLoadedData={() => setVideoLoaded(true)}
          >
            <source src="/video/product_hero_desktop.webm" type="video/webm" media="(min-width: 768px)" />
            <source src="/video/product_hero_desktop.mp4" type="video/mp4" media="(min-width: 768px)" />
            <source src="/video/product_hero_mobile.webm" type="video/webm" />
            <source src="/video/product_hero_mobile.mp4" type="video/mp4" />
          </video>
        </div>

        <div style={contentStyle}>
          <div style={labelStyle}>{label}</div>
          <h1 style={titleStyle}>
            <span style={gradientTextStyle}>{gradientText}</span>
            <span style={whiteTextStyle}>{title}</span>
          </h1>
          <p style={descriptionStyle}>{description}</p>
          <a
            href={ctaHref}
            target="_blank"
            rel="noopener noreferrer"
            style={buttonStyle}
            className="nvm-hero-btn"
          >
            {ctaText}
          </a>
        </div>
      </div>
    </>
  );
};
