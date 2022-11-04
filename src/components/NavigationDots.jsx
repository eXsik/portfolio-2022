import React from "react";

const NavigationDots = ({ active }) => {
  return (
    <div className="app__navigation">
      {["home", "about", "work", "skills", "testimonials", "contact"].map(
        (item, index) => (
          <a
            key={item + index}
            href={`#${item}`}
            title={item}
            className="app__navigation-dot"
            style={active === item ? { backgroundColor: "#0575E6" } : {}}
          />
        )
      )}
    </div>
  );
};

export default NavigationDots;
