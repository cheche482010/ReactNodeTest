import React from 'react';
import './TimeSection.scss';

const TimeSection = () => {
    return (
        <div className="bg-green-800 text-white p-4 flex items-center justify-around">
          <div className="text-left">
            <p className="text-lg font-bold">Lorem ipsum dolor sit amet, consetetur</p>
          </div>
          <div className="flex time">
            <div className="text-center p-4">
              <p className="text-4xl font-bold">170</p>
              <p className="text-green">days</p>
            </div>
            <div className="text-center p-4">
              <p className="text-4xl font-bold">13</p>
              <p className="text-green">hours</p>
            </div>
            <div className="text-center p-4">
              <p className="text-4xl font-bold">39</p>
              <p className="text-green">minutes</p>
            </div>
            <div className="text-center p-4">
              <p className="text-4xl font-bold">29</p>
              <p className="text-green">Seconds</p>
            </div>
          </div>
        </div>
    )
};

export default TimeSection;