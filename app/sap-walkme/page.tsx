import Link from "next/link"
import { Search, Menu, ChevronDown, MoreHorizontal } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent } from "@/components/ui/card"

export default function TechnoNovaSpherePage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navigation Header */}
      <header className="bg-white border-b border-gray-200 px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-4">
              <Menu className="w-5 h-5 text-gray-600" />
              <Link href="/" className="font-bold text-lg border-b-2 border-black pb-1">
                HOME
              </Link>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <div className="relative">
              <Input placeholder="Search Klue" className="pl-4 pr-12 w-80 bg-gray-50 border-gray-300 rounded-full" />
              <div className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-black rounded-full p-2">
                <Search className="w-4 h-4 text-white" />
              </div>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <span className="font-semibold">DIGEST</span>
            <Button variant="outline" size="sm" className="text-blue-600 border-blue-600 bg-transparent">
              📝 Submit Intel
            </Button>
            <div className="w-8 h-8 bg-gray-300 rounded-full"></div>
            <button className="text-gray-600">⋮</button>
          </div>
        </div>
      </header>

      <div className="flex">
        {/* Left Sidebar */}
        <aside className="w-64 bg-white border-r border-gray-200 p-6">
          <div className="mb-6">
            <div className="flex items-center gap-2 mb-4">
              <h1 className="font-semibold text-lg">Acme</h1>
              <div className="w-6 h-6 bg-gray-300 rounded flex items-center justify-center">
                <span className="text-gray-600 text-xs">K</span>
              </div>
            </div>
          </div>

          <nav className="space-y-2">
            <div className="flex items-center gap-3 py-2 px-3 text-gray-700 hover:bg-gray-100 rounded cursor-pointer">
              <div className="w-5 h-5 bg-gray-400 rounded"></div>
              <span className="text-sm">Profile</span>
            </div>

            <div className="flex items-center gap-3 py-2 px-3 text-gray-700 hover:bg-gray-100 rounded cursor-pointer">
              <div className="w-5 h-5 bg-gray-400 rounded"></div>
              <span className="text-sm">Cards</span>
              <ChevronDown className="w-4 h-4 ml-auto" />
            </div>

            <div className="flex items-center gap-3 py-2 px-3 text-gray-700 hover:bg-gray-100 rounded cursor-pointer">
              <div className="w-5 h-5 bg-yellow-400 rounded flex items-center justify-center">
                <span className="text-xs">6</span>
              </div>
              <span className="text-sm">News</span>
            </div>

            <div className="flex items-center gap-3 py-2 px-3 text-gray-700 hover:bg-gray-100 rounded cursor-pointer">
              <div className="w-5 h-5 bg-gray-400 rounded"></div>
              <span className="text-sm">Battlecards</span>
              <ChevronDown className="w-4 h-4 ml-auto" />
            </div>

            <div className="ml-6 space-y-1">
              <div className="py-2 px-3 text-blue-600 bg-blue-50 rounded text-sm border-l-2 border-blue-600">
                Sales Battlecard: Pro-active / Reactive
              </div>
              <div className="py-2 px-3 text-gray-600 hover:bg-gray-100 rounded text-sm cursor-pointer">
                Sales Battlecard: 8 Cards
              </div>
            </div>
          </nav>
        </aside>

        {/* Main Content */}
        <main className="flex-1 p-6">
          <div className="mb-6">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-blue-500 rounded flex items-center justify-center">
                  <span className="text-white text-xs font-bold">Acme</span>
                </div>
                <div>
                  <div className="text-sm text-gray-500">Battlecard</div>
                  <h1 className="text-xl font-semibold">Sales Battlecard: Pro-active / Reactive</h1>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="flex items-center gap-2">
                  <span className="bg-green-100 text-green-800 px-2 py-1 rounded text-xs font-medium">Reviewed</span>
                  <span className="text-sm text-gray-500">3 months Ago by Laura Sanchez</span>
                </div>
                <div className="flex items-center gap-2">
                  <Button variant="outline" size="sm" className="text-gray-600 border-gray-300 bg-transparent">
                    📋 Layout
                    <ChevronDown className="w-4 h-4 ml-1" />
                  </Button>
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-8">
            {/* Left Column */}
            <div className="space-y-6">
              <Card className="p-6">
                <CardContent className="p-0">
                  <div className="flex items-center gap-2 mb-4">
                    <span className="text-yellow-500">⚠️</span>
                    <h3 className="font-semibold text-gray-800">What's New With Acme</h3>
                  </div>

                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-green-500 rounded-full mt-2"></div>
                      <div>
                        <h4 className="font-medium text-gray-800 mb-1">Proactive Tactics:</h4>
                        <p className="text-sm text-gray-600">
                          Generates a concise competitive edge summary (e.g., “Compared to Acme, Gen Pro offers 40% faster integration and higher compliance coverage”). 
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-red-500 rounded-full mt-2"></div>
                      <div>
                        <h4 className="font-medium text-gray-800 mb-1">Reactive Tactics:</h4>
                        <p className="text-sm text-gray-600">
                          While the initial license may look similar, Gen Pro’s lower support overhead ensures your 5-year TCO is 20–30% lower than Acme
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="mt-6">
                    <h4 className="font-medium text-gray-800 mb-3">More Resources</h4>
                    <div className="flex items-center gap-2 text-sm text-red-600">
                      <span>📄</span>
                      <span>Acme Acquisition</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Right Column */}
            <div className="space-y-6">
              <Card className="p-6">
                <CardContent className="p-0">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-2">
                      <span className="text-yellow-500">⚠️</span>
                      <h3 className="font-semibold text-gray-800">What's New With Acme</h3>
                    </div>
                    <div className="flex items-center gap-2">
                      <button className="text-gray-400 hover:text-gray-600">
                        <MoreHorizontal className="w-5 h-5" />
                      </button>
                      <button className="text-gray-400 hover:text-gray-600">⋮</button>
                    </div>
                  </div>

                  <div className="bg-gradient-to-r from-red-500 to-purple-600 h-16 rounded mb-6"></div>

                  <div className="mb-6">
                    <h4 className="font-semibold text-center text-gray-800 mb-4">Cards recently added or edited:</h4>

                    <div className="overflow-x-auto">
                      <table className="w-full text-sm">
                        <thead>
                          <tr className="border-b border-gray-200">
                            <th className="text-left py-2 font-medium text-gray-600">Card (Linked)</th>
                            <th className="text-left py-2 font-medium text-gray-600">Date</th>
                            <th className="text-left py-2 font-medium text-gray-600">Note</th>
                          </tr>
                        </thead>
                        <tbody className="space-y-2">
                          <tr className="border-b border-gray-100">
                            <td className="py-3">
                              <a href="#" className="text-blue-600 hover:underline">
                                Techno SN + Acme - Techno Technophire announcements
                              </a>
                            </td>
                            <td className="py-3 text-gray-600">May 20, 2025</td>
                            <td className="py-3 text-gray-600">
                              Techno has announced major updates to SN that may introduce competitive threats,
                              particularly in Techno-heavy accounts. These updates, powered by Acme, aim to strengthen
                              Techno's AI and automation capabilities. Here's what you need to know and how to position
                              Whatfix
                            </td>
                          </tr>
                          <tr className="border-b border-gray-100">
                            <td className="py-3">
                              <a href="#" className="text-blue-600 hover:underline">
                                Acme is offered for FREE with Techno SuccessFactors
                              </a>
                            </td>
                            <td className="py-3 text-gray-600">April 10, 2025</td>
                            <td className="py-3 text-gray-600">
                              They are just offering 10 flows, and are not customizable
                            </td>
                          </tr>
                          <tr className="border-b border-gray-100">
                            <td className="py-3">
                              <a href="#" className="text-blue-600 hover:underline">
                                Acme Winter Release
                              </a>
                            </td>
                            <td className="py-3 text-gray-600">Feb 2025</td>
                            <td className="py-3 text-gray-600">
                              Always-on and on-demand AI assistance, enhanced content management, deeper analytics, and
                              improved
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </main>

        {/* Quick Help Button */}
        <div className="fixed right-0 top-1/2 transform -translate-y-1/2 bg-cyan-500 text-white px-3 py-8 rounded-l-lg cursor-pointer hover:bg-cyan-600 transition-colors">
          <div className="transform -rotate-90 whitespace-nowrap text-sm font-medium">Quick Help</div>
        </div>

        {/* Klue Assistant */}
        <div className="fixed bottom-6 right-6">
          <div className="w-12 h-12 bg-purple-600 rounded-full flex items-center justify-center text-white font-bold text-xl cursor-pointer hover:bg-purple-700 transition-colors shadow-lg">
            K
          </div>
          <div className="absolute -top-1 -right-1 w-6 h-6 bg-red-500 rounded-full flex items-center justify-center text-white text-xs font-bold">
            7
          </div>
        </div>
      </div>
    </div>
  )
}
