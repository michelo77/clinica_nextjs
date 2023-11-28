"use client"

import React, { useState } from 'react';
import Calendar from 'react-calendar';

export default function Calendar() {
    const [value, onChange] = useState(new Date());
    console.log(value)
    return (
        <div>
            <Calendar
                value={value}
                onChange={onChange}
            />
        </div>
    );
}