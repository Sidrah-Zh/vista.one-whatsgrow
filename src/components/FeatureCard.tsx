import React from 'react';

interface FeatureCardProps {
  title: string;
  description: string;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ title, description }) => {
  return (
    <div className="p-6 bg-white shadow-md rounded-lg">
      <h3 className="text-2xl font-semibold mb-2">{title}</h3>
      <p>{description}</p>
    </div>
  );
};

export default FeatureCard;
