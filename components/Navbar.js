import Link from "next/link";
import { ChevronRight } from "lucide-react";
import Image from "next/image";

import {
  ChevronDown,
  Users,
  Trophy,
  Briefcase,
  Info,
  Calendar,
  Newspaper,
  BookOpen,
} from "lucide-react";

export default function Navbar() {
  return (
    <nav className="border-b bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <div className="flex items-center">
            <Link href="/" className="flex-shrink-0">
              <Image
                src="/naxa-logo.png"
                alt="NAXA"
                width={120}
                height={40}
                className="h-8 w-auto"
              />
            </Link>
          </div>

          <div className="hidden md:flex items-center space-x-8">
            <Link href="/services" className="text-black font-medium">
              Services
            </Link>

            <div className="relative group">
              <button className="flex items-center space-x-1 text-gray-700 font-medium">
                <span>Portfolio</span>
                <ChevronDown className="h-4 w-4" />
              </button>
              <div className="absolute left-0 mt-2 w-48 bg-white rounded-md shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                <div className="py-2">
                  <Link
                    href="/portfolio/general"
                    className="block px-4 py-2 text-gray-700 hover:bg-yellow-300"
                  >
                    General
                  </Link>
                  <Link
                    href="/portfolio/international"
                    className="block px-4 py-2 text-gray-700 hover:bg-yellow-300"
                  >
                    International
                  </Link>
                </div>
              </div>
            </div>

            <div className="relative group">
              <button className="flex items-center space-x-1 text-gray-700 font-medium">
                <span>Company</span>
                <ChevronDown className="h-4 w-4" />
              </button>
              <div className="absolute left-0 mt-2 w-64 bg-white rounded-md shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                <div className="py-2">
                  <Link
                    href="/company/about"
                    className="flex items-center px-4 py-2 text-gray-700 hover:bg-yellow-300"
                  >
                    <Info className="h-4 w-4 mr-2" />
                    About Us
                  </Link>
                  <Link
                    href="/company/team"
                    className="flex items-center px-4 py-2 text-gray-700 hover:bg-yellow-300"
                  >
                    <Users className="h-4 w-4 mr-2" />
                    Team
                  </Link>
                  <Link
                    href="/company/careers"
                    className="flex items-center px-4 py-2 text-gray-700 hover:bg-yellow-300"
                  >
                    <Briefcase className="h-4 w-4 mr-2" />
                    Work with Us
                  </Link>
                  <Link
                    href="/company/awards"
                    className="flex items-center px-4 py-2 text-gray-700 hover:bg-yellow-300"
                  >
                    <Trophy className="h-4 w-4 mr-2" />
                    Awards and Achievements
                  </Link>
                </div>
              </div>
            </div>

            <Link href="/geoai" className="text-gray-700 font-medium">
              GeoAI
            </Link>

            <div className="relative group">
              <button className="flex items-center space-x-1 text-gray-700 font-medium">
                <span>Events & Media</span>
                <ChevronDown className="h-4 w-4" />
              </button>
              <div className="absolute left-0 mt-2 w-48 bg-white rounded-md shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                <div className="py-2">
                  <Link
                    href="/events"
                    className="flex items-center px-4 py-2 text-gray-700 hover:bg-yellow-300"
                  >
                    <Calendar className="h-4 w-4 mr-2" />
                    Events
                  </Link>
                  <Link
                    href="/media"
                    className="flex items-center px-4 py-2 text-gray-700 hover:bg-yellow-300"
                  >
                    <Newspaper className="h-4 w-4 mr-2" />
                    Media
                  </Link>
                  <Link
                    href="/publications"
                    className="flex items-center px-4 py-2 text-gray-700 hover:bg-yellow-300"
                  >
                    <BookOpen className="h-4 w-4 mr-2" />
                    Publications
                  </Link>
                </div>
              </div>
            </div>

            <Link href="/blogs" className="text-gray-700 font-medium">
              Blogs
            </Link>
          </div>

          <button className="bg-yellow-300 px-6 py-2 rounded-md font-medium text-gray-800 hover:bg-orange-300 transition-all duration-200 group w-32 relative">
            <div className="flex items-center justify-center">
              {/* eslint-disable-next-line react/no-unescaped-entities */}
              <span className="group-hover:-translate-x-2 transition-all duration-200">
                Let&apos;s talk
              </span>
              <ChevronRight
                className="h-4 w-4 absolute transform opacity-0 group-hover:opacity-100 transition-all duration-200"
                style={{ right: "1rem" }}
              />
            </div>
          </button>
        </div>
      </div>
    </nav>
  );
}
