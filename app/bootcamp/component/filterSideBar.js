import React from 'react';

const FilterSidebar = () => (
    <div className="w-64 p-4 border-l">
        <h3 className="text-xl font-semibold mb-4">Job Type</h3>
        <div className="mb-4">
            <label className="block">
                <input type="checkbox" className="mr-2" /> Full-time
            </label>
            <label className="block">
                <input type="checkbox" className="mr-2" /> Part-time
            </label>
            <label className="block">
                <input type="checkbox" className="mr-2" /> Internship
            </label>
            <label className="block">
                <input type="checkbox" className="mr-2" /> Contract / Freelance
            </label>
            <label className="block">
                <input type="checkbox" className="mr-2" /> Co-founder
            </label>
        </div>
        <h3 className="text-xl font-semibold mb-4">Job Roles</h3>
        <div className="mb-4">
            <label className="block">
                <input type="checkbox" className="mr-2" checked /> Programming
            </label>
            <label className="block">
                <input type="checkbox" className="mr-2" /> Design
            </label>
            <label className="block">
                <input type="checkbox" className="mr-2" /> Management / Finance
            </label>
            <label className="block">
                <input type="checkbox" className="mr-2" /> Customer Support
            </label>
            <label className="block">
                <input type="checkbox" className="mr-2" /> Sales / Marketing
            </label>
        </div>
        <h3 className="text-xl font-semibold mb-4">Remote Only</h3>
        <div className="mb-4">
            <label className="flex items-center">
                <input type="checkbox" className="mr-2" />
                <span>Remote Only</span>
            </label>
        </div>
        <h3 className="text-xl font-semibold mb-4">Salary Range</h3>
        <div className="mb-4">
            <label className="block">
                <input type="checkbox" className="mr-2" /> $20K - $50K
            </label>
            <label className="block">
                <input type="checkbox" className="mr-2" /> $50K - $100K
            </label>
            <label className="block">
                <input type="checkbox" className="mr-2" />  $100K
            </label>
        </div>
        <h3 className="text-xl font-semibold mb-4">Location</h3>
        <div>
            <select className="w-full p-2 border">
                <option>Anywhere</option>
                <option>NYC</option>
                <option>London</option>
                <option>Remote</option>
            </select>
        </div>
    </div>
);

export default FilterSidebar;