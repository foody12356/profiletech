import { useState } from 'react';
import Group from './Group';
import { months, calcButtonTextColor } from '../tools';

export default function EditableUserProfile({
    stored,
    
}) {

    console.log()

    const buttonStyle = {
        backgroundColor: stored.color,
        color: calcButtonTextColor(stored.color)
    };

    return <div>
    
        <Group>
            <h2>Name:</h2> {stored.name}
        </Group>
        <Group>
            <h2>Birthday:</h2> {months.getShortName(stored.month)} {stored.day}
        </Group>
        <Group>
            <h2>Attendance: </h2> 
        </Group>
        <Group>
        <button  >Check In</button>
              
        <button  >Check Out</button>
              
        </Group>
    </div>
}