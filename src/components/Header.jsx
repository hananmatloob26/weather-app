import { Cloud } from 'lucide-react';
import UnitToggle from './UnitToggle';

const Header = ({ unit, onUnitToggle }) => {
  return (
    <header className="header">
      <div className="header-content">
        <div className="header-brand">
          <Cloud className="header-icon" size={32} />
          <div className="header-text">
            <h1 className="header-title">SkyCast</h1>
            <p className="header-subtitle">Your daily weather companion</p>
          </div>
        </div>
        <UnitToggle unit={unit} onUnitToggle={onUnitToggle} />
      </div>
    </header>
  );
};

export default Header;
