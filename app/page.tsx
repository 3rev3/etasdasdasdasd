'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import { Star, ChevronDown, ChevronUp, Loader2, Users, ArrowUpDown } from 'lucide-react'

type Drainer = {
  name: string
  rating: number
  stars: number
  features: string[]
  logoUrl: string
  link: string
}

type Groupchat = {
  name: string
  memberCount: number
  logoUrl: string
  description: string
  rating: number
  stars: number
  link: string
}

const initialDrainers: Drainer[] = [
  { name: "Angel Drainer", rating: 95, stars: 5, features: ["Instant Withdrawals", "Reputable", "Low 20% Fee"], logoUrl: "https://i.ibb.co/bWdt0Kv/angel.jpg", link: "https://example.com/angeldrainer" },
  { name: "Inferno Drainer", rating: 92, stars: 4, features: ["Instant Withdrawals", "Reputable", "Low 20% Fee"], logoUrl: "https://i.ibb.co/dQKmGbn/inferno.jpg", link: "https://example.com/cryptodrain" },
  { name: "Riddance Drainer", rating: 90, stars: 4, features: ["Instant Withdrawals", "Reputable", "Low 20% Fee"], logoUrl: "https://i.ibb.co/x33yws1/riddance.jpg", link: "https://example.com/bitdrain" },
  { name: "Ace Drainer", rating: 90, stars: 5, features: ["Instant Withdrawals", "Reputable", "Low 20% Fee"], logoUrl: "https://i.ibb.co/4Tb0Qgj/ace.jpg", link: "https://example.com/coindrainer" },
  { name: "Pink Drainer", rating: 87, stars: 4, features: ["Instant Withdrawals", "Reputable", "Low 20% Fee"], logoUrl: "https://i.ibb.co/ZY2QGHx/pink.jpg", link: "https://example.com/etherdrain" },
]

const initialGroupchats: Groupchat[] = [
  { name: "Example", memberCount: 5000, logoUrl: "/placeholder.svg?height=64&width=64", description: "Discuss the latest trends in cryptocurrency", rating: 4.5, stars: 4, link: "https://example.com/cryptoenthusiasts" },
  { name: "Example", memberCount: 5000, logoUrl: "/placeholder.svg?height=64&width=64", description: "Discuss the latest trends in cryptocurrency", rating: 4.5, stars: 4, link: "https://example.com/cryptoenthusiasts" },
  { name: "Example", memberCount: 5000, logoUrl: "/placeholder.svg?height=64&width=64", description: "Discuss the latest trends in cryptocurrency", rating: 4.5, stars: 4, link: "https://example.com/cryptoenthusiasts" },
]

export default function Component() {
  const [drainerSortOrder, setDrainerSortOrder] = useState<'asc' | 'desc'>('desc')
  const [sortedDrainers, setSortedDrainers] = useState<Drainer[]>([])
  const [groupchatSortOrder, setGroupchatSortOrder] = useState<'asc' | 'desc'>('desc')
  const [sortedGroupchats, setSortedGroupchats] = useState<Groupchat[]>([])
  const [isLoading, setIsLoading] = useState(true)
  const [activeSection, setActiveSection] = useState<'drainers' | 'groupchats'>('drainers')

  useEffect(() => {
    const sortDrainers = () => {
      const sorted = [...initialDrainers].sort((a, b) => 
        drainerSortOrder === 'desc' ? b.rating - a.rating : a.rating - b.rating
      )
      setSortedDrainers(sorted)
    }

    const sortGroupchats = () => {
      const sorted = [...initialGroupchats].sort((a, b) => 
        groupchatSortOrder === 'desc' ? b.rating - a.rating : a.rating - b.rating
      )
      setSortedGroupchats(sorted)
    }

    sortDrainers()
    sortGroupchats()
  }, [drainerSortOrder, groupchatSortOrder])

  const handleDrainerSort = () => {
    setDrainerSortOrder(prevOrder => prevOrder === 'desc' ? 'asc' : 'desc')
  }

  const handleGroupchatSort = () => {
    setGroupchatSortOrder(prevOrder => prevOrder === 'desc' ? 'asc' : 'desc')
  }
  
  const featuredDrainer: Drainer = {
    name: "Angel Drainer",
    rating: 95,
    stars: 5,
    features: ["Instant Withdrawals", "Reputable", "Low 20% Fee"],
    logoUrl: "https://i.ibb.co/bWdt0Kv/angel.jpg",
    link: "https://example.com/angeldrainer"
  };

  return (
    <div className="flex flex-col min-h-screen bg-white text-black">
      <div className="bg-purple-600 text-white py-12 px-4">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl sm:text-4xl font-bold mb-4">Featured Drainer</h1>
          <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6 flex flex-col sm:flex-row items-center justify-between">
            <div className="flex items-center mb-4 sm:mb-0">
              <Image
                src={featuredDrainer.logoUrl}
                alt={`${featuredDrainer.name} logo`}
                width={80}
                height={80}
                className="rounded-lg mr-4"
              />
              <div>
                <h2 className="text-2xl font-bold">{featuredDrainer.name}</h2>
                <div className="flex items-center mt-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className={`w-5 h-5 ${i < featuredDrainer.stars ? 'text-yellow-400 fill-current' : 'text-gray-300'}`} />
                  ))}
                </div>
              </div>
            </div>
            <div className="text-center sm:text-right">
              <p className="text-4xl font-bold">{featuredDrainer.rating}/100</p>
              <a
                href={featuredDrainer.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block mt-2 px-6 py-2 bg-white text-purple-600 rounded-lg font-semibold hover:bg-purple-100 transition-colors duration-200"
                >
                Visit Now
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto p-4 space-y-6 flex-grow">
        <div className="bg-yellow-100 border-l-4 border-yellow-500 p-4 mb-4">
          <p className="text-sm text-yellow-700">
            Disclaimer: We are not affiliated with any of the crypto drainers listed below. This information is provided for educational purposes only. Cryptocurrency investments carry high risk. Only invest what you can afford to lose.
          </p>
        </div>

        <div className="space-y-2">
          <h2 className="text-2xl sm:text-3xl font-bold">Best Bitcoin & Crypto Drainers for September 2024</h2>
        </div>

        <div className="flex space-x-4 mb-4">
          <button
            className={`px-4 py-2 rounded-md transition-colors duration-200 ${
              activeSection === 'drainers' ? 'bg-black text-white' : 'bg-gray-200 text-black'
            }`}
            onClick={() => setActiveSection('drainers')}
          >
            Drainers
          </button>
          <button
            className={`px-4 py-2 rounded-md transition-colors duration-200 ${
              activeSection === 'groupchats' ? 'bg-black text-white' : 'bg-gray-200 text-black'
            }`}
            onClick={() => setActiveSection('groupchats')}
          >
            Groupchats
          </button>
        </div>

        {activeSection === 'drainers' && (
          <>
            <div className="space-y-4">
              <h3 className="text-xl sm:text-2xl font-bold">Top Crypto Drainers</h3>
              <button 
                className="inline-flex items-center justify-center rounded-md bg-black text-white text-sm font-medium shadow-sm py-3 px-4 hover:bg-gray-800 outline-none transition-all duration-200"
                onClick={handleDrainerSort}
              >
                Sort By Rating
                <ArrowUpDown className="ml-2 h-4 w-4 transition-transform duration-200" style={{ transform: drainerSortOrder === 'desc' ? 'scaleY(-1)' : 'scaleY(1)' }} />
              </button>
            </div>

            <div className="space-y-6 transition-all duration-300 ease-in-out">
              {sortedDrainers.map((drainer, index) => (
                <div 
                  key={drainer.name} 
                  className="block rounded-xl border bg-white text-black shadow hover:shadow-lg transition-all duration-300 ease-in-out transform hover:-translate-y-1"
                  style={{ transitionDelay: `${index * 50}ms` }}
                >
                  <div className="p-4 sm:p-6">
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between space-y-4 sm:space-y-0">
                      <div className="flex items-center space-x-4">
                        <div className="w-16 h-16 relative">
                          <Image
                            src={drainer.logoUrl}
                            alt={`${drainer.name} logo`}
                            layout="fill"
                            objectFit="cover"
                            className="rounded-lg"
                          />
                        </div>
                        <div>
                          <h4 className="font-bold">{drainer.name}</h4>
                          <div className="flex items-center">
                            {[...Array(5)].map((_, i) => (
                              <Star key={i} className={`w-4 h-4 ${i < drainer.stars ? 'text-yellow-400 fill-current' : 'text-gray-300'}`} />
                            ))}
                          </div>
                        </div>
                      </div>
                      <div className="text-left sm:text-right">
                        <p className="text-3xl font-bold">{drainer.rating}/100</p>
                      </div>
                    </div>
                    <ul className="mt-4 space-y-2">
                      {drainer.features.map((feature, index) => (
                        <li key={index} className="flex items-center space-x-2">
                          <svg className="w-5 h-5 text-green-500 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="bg-gray-50 p-4">
                    <a href={drainer.link} target="_blank" rel="noopener noreferrer" className="w-full inline-flex items-center justify-center rounded-md bg-black text-white text-sm font-medium shadow-sm py-3 px-4 hover:bg-gray-800 outline-none transition-colors duration-200">
                      Visit {drainer.name}
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </>
        )}

        {activeSection === 'groupchats' && (
          <>
            <div className="space-y-4">
              <h3 className="text-xl sm:text-2xl font-bold">Popular Draining Groupchats</h3>
              <button 
                className="inline-flex items-center justify-center rounded-md bg-black text-white text-sm font-medium shadow-sm py-3 px-4 hover:bg-gray-800 outline-none transition-all duration-200"
                onClick={handleGroupchatSort}
              >
                Sort By Rating
                <ArrowUpDown className="ml-2 h-4 w-4 transition-transform duration-200" style={{ transform: groupchatSortOrder === 'desc' ? 'scaleY(-1)' : 'scaleY(1)' }} />
              </button>
            </div>

            <div className="space-y-6 transition-all duration-300 ease-in-out">
              {sortedGroupchats.map((groupchat, index) => (
                <div 
                  key={groupchat.name} 
                  className="block rounded-xl border bg-white text-black shadow hover:shadow-lg transition-all duration-300 ease-in-out transform hover:-translate-y-1"
                  style={{ transitionDelay: `${index * 50}ms` }}
                >
                  <div className="p-4 sm:p-6">
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between space-y-4 sm:space-y-0">
                      <div className="flex items-center space-x-4">
                        <div className="w-16 h-16 relative">
                          <Image
                            src={groupchat.logoUrl}
                            alt={`${groupchat.name} logo`}
                            layout="fill"
                            objectFit="cover"
                            className="rounded-lg"
                          />
                        </div>
                        <div>
                          <h4 className="font-bold">{groupchat.name}</h4>
                          <p className="text-sm text-gray-500">{groupchat.description}</p>
                          <div className="flex items-center mt-2">
                            {[...Array(5)].map((_, i) => (
                              <Star key={i} className={`w-4 h-4 ${i < groupchat.stars ? 'text-yellow-400 fill-current' : 'text-gray-300'}`} />
                            ))}
                          </div>
                        </div>
                      </div>
                      <div className="text-right mt-4 flex items-center justify-end">
                        <Users className="w-5 h-5 mr-2 text-gray-500" />
                        <p className="text-lg font-bold">{groupchat.memberCount}</p>
                      </div>
                    </div>
                    <div className="bg-gray-50 p-4 mt-4">
                      <a href={groupchat.link} target="_blank" rel="noopener noreferrer" className="w-full inline-flex items-center justify-center rounded-md bg-black text-white text-sm font-medium shadow-sm py-3 px-4 hover:bg-gray-800 outline-none transition-colors duration-200">
                        Join Now
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </>
        )}
      </div>

      <footer className="mt-12 border-t pt-6 bg-gray-50">
    <div className="max-w-4xl mx-auto px-4 py-8">
      <div className="flex flex-col sm:flex-row justify-between items-center mb-8">
        <div className="mb-4 sm:mb-0">
          <h3 className="text-lg font-semibold">TopDrains</h3>
          <p className="text-sm text-gray-500">Your trusted source for crypto drainer reviews</p>
        </div>
        <div className="flex flex-wrap justify-center sm:justify-end gap-4">
          <a href="#" className="text-sm text-blue-600 hover:underline transition-colors duration-200">Contact Us</a>
        </div>
      </div>
      <div className="text-center text-sm text-gray-500">
        © 2024 TopDrains. All rights reserved.
      </div>
    </div>
  </footer>
    </div>
  )
}