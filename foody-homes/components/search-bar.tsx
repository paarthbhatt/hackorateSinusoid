"use client"

import type React from "react"

import { useState } from "react"
import { Search } from "lucide-react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"

export default function SearchBar() {
  const [searchQuery, setSearchQuery] = useState("")

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle search functionality
    console.log("Searching for:", searchQuery)
  }

  return (
    <form onSubmit={handleSearch} className="relative w-full">
      <div className="relative flex items-center">
        <Input
          type="text"
          placeholder="Search for food, restaurants, cuisines..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="w-full pl-12 pr-20 py-6 text-lg bg-white/90 backdrop-blur-sm border-0 rounded-full shadow-lg focus-visible:ring-primary"
        />
        <Search className="absolute left-4 h-6 w-6 text-gray-400" />
        <Button type="submit" className="absolute right-2 bg-primary hover:bg-primary/90 text-white rounded-full px-6">
          Search
        </Button>
      </div>
    </form>
  )
}
