function FeatureCard({ img, title, text }) {
    return ( 
      <div className="feature-item">
          <img src={img} alt="Feature Icon" className="feature-icon" /> {/* Modification de l'alt text */}
          <h3 className="feature-item-title">{title}</h3>
          <p>{text}</p>
      </div>
    );
}

export default FeatureCard