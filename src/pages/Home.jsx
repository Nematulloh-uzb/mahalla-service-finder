import React from 'react'

import { useState } from "react";
import services from "../data/services";
import ServiceCard from "../components/ServiceCard";
import SearchBar from "../components/SearchBar";
import CategoryFilter from "../components/CategoryFilter";

function Home() {
    const filtered = services.filter((s) => {
        const matchSearch =
            s.name.toLowerCase().includes(search.toLowerCase()) ||
            s.category.toLowerCase().includes(search.toLowerCase()) ||
            s.location.toLowerCase().includes(search.toLowerCase());

        const matchCategory =
            category === "All" ||
            s.category.trim().toLowerCase() === category.trim().toLowerCase();

        return matchSearch && matchCategory;
    });

    return (
        <div className="container">

            <h1 className="header">🏘 Mahalla Service Finder</h1>
            <p className="sub">Yaqin atrofdagi ustalarni toping</p>

            <SearchBar setSearch={setSearch} />
            <CategoryFilter setCategory={setCategory} />

            <div className="grid" style={{ marginTop: 20 }}>
                {filtered.map((s) => (
                    <ServiceCard key={s.id} service={s} />
                ))}
            </div>

        </div>
    );
}

export default Home;