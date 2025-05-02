import React from 'react';

interface StatsCardProps {
  title: string;
  value: string | number;
  icon: React.ReactNode;
}

const StatsCard: React.FC<StatsCardProps> = ({ title, value, icon }) => {
  return (
    <div className="stats-card">
      <h3 className="text-text-muted text-sm mb-1">{title}</h3>
      <div className="flex items-center justify-between">
        <span className="text-2xl font-bold">{value}</span>
        <div className="text-primary-blue">{icon}</div>
      </div>
    </div>
  );
};

export default StatsCard;
