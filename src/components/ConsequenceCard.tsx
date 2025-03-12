import React from 'react';

interface ConsequenceCardProps {
  title: string;
  description: string;
}

const ConsequenceCard: React.FC<ConsequenceCardProps> = ({ title, description }) => {
  return (
    <div className="p-6 bg-white shadow-md rounded-lg">
      <h3 className="text-2xl font-semibold mb-2">{title}</h3>
      <p>{description}</p>
    </div>
  );
};

export default ConsequenceCard;
