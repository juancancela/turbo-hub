import React, { useContext, useEffect } from 'react';
import { AppContext } from '../context/AppContext';
import { getPageData } from 'utils/config';

export default function A({ data }) {
    return (
        <div style={{'background':'red'}}>
        A
        </div>
    );
}