import React, { useState } from 'react';
import services from "../data/services";
import ServiceCard from "../components/ServiceCard";
import SearchBar from "../components/SearchBar";
import CategoryFilter from "../components/CategoryFilter";

function Home() {
    // 1. Statelarni shu yerda e'lon qilamiz
    const [search, setSearch] = useState("");
    const [category, setCategory] = useState("All");

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
            <h1 className="header">🏡 Mahalla Service Finder</h1>
            <p className="sub">Yaqin atrofdagi ustalarni toping</p>

            {/* 2. Komponentlarga statelarni va ularni o'zgartiruvchi funksiyalarni uzating */}
            <SearchBar search={search} setSearch={setSearch} />
            <CategoryFilter category={category} setCategory={setCategory} />

            {/* Bu yerda filtered massivini map qilib chiqarasiz */}
            <div className="grid">
                {filtered.map(service => (
                    <ServiceCard key={service.id} service={service} />
                ))}
            </div>
        </div>
    );
}

export default Home;