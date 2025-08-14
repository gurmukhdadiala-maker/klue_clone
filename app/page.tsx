import Link from "next/link"
import { Search, Menu, ChevronDown, ExternalLink } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent } from "@/components/ui/card"

export default function KlueDashboard() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navigation Header */}
      <header className="bg-white border-b border-gray-200 px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-4">
              <Menu className="w-5 h-5 text-gray-600" />
              <span className="font-bold text-lg border-b-2 border-black pb-1">HOME</span>
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

      {/* Klue Assistant Bar */}
      <div className="bg-white border-b border-gray-200 px-6 py-3">
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 bg-purple-600 rounded text-white text-xs flex items-center justify-center font-bold">
              k
            </div>
            <span className="text-purple-600 font-medium">klue</span>
            <span className="text-gray-500">Ask Klue...</span>
            <ExternalLink className="w-4 h-4 text-gray-400" />
          </div>
          <div className="flex-1 flex items-center gap-8 text-sm">
            <div className="flex items-center gap-2">
              <span className="text-red-500">📍</span>
              <span className="text-purple-600">Our top 3 selling points against Pendo</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-blue-500">🎯</span>
              <span className="text-purple-600">How do I win against Clicklearn?</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-green-500">📊</span>
              <span className="text-purple-600">Why would a prospect choose Appcues?</span>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <button className="text-gray-400">←</button>
            <button className="text-gray-400">→</button>
          </div>
        </div>
      </div>

      <div className="flex">
        {/* Main Content */}
        <main className="flex-1 p-6">
          {/* Boards Section */}
          <div className="mb-8">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-xl font-semibold flex items-center gap-2">
                <div className="w-6 h-6 bg-black rounded flex items-center justify-center">
                  <div className="w-3 h-3 bg-white rounded"></div>
                </div>
                Boards
              </h2>
              <div className="flex items-center gap-4">
                <div className="flex items-center gap-2">
                  <span className="text-sm text-gray-600">🔽 All Groups</span>
                  <ChevronDown className="w-4 h-4" />
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-sm text-gray-600">📊 Z-A</span>
                  <ChevronDown className="w-4 h-4" />
                </div>
              </div>
            </div>

            {/* DAP - Tier 1 */}
            <div className="mb-6">
              <div className="flex items-center gap-2 mb-4">
                <h3 className="font-medium text-gray-800">DAP - Tier 1</h3>
                <ChevronDown className="w-4 h-4 text-gray-500" />
              </div>
              <div className="grid grid-cols-4 gap-4">
                <Card className="p-6 text-center hover:shadow-md transition-shadow cursor-pointer">
                  <CardContent className="p-0">
                    <div className="w-16 h-16 mx-auto mb-3 bg-purple-600 rounded-lg flex items-center justify-center">
                      <div className="text-white font-bold text-xl">B</div>
                    </div>
                    <h4 className="font-medium text-gray-800">BlueArc Solutions</h4>
                  </CardContent>
                </Card>

                <Link href="/sap-walkme">
                  <Card className="p-6 text-center hover:shadow-md transition-shadow cursor-pointer">
                    <CardContent className="p-0">
                      <div className="w-16 h-16 mx-auto mb-3 bg-blue-500 rounded-lg flex items-center justify-center">
                        <span className="text-white text-xs font-bold">NovaSphere</span>
                      </div>
                      <h4 className="font-medium text-gray-800">NovaSphere Technologies</h4>
                    </CardContent>
                  </Card>
                </Link>

                <Card className="p-6 text-center hover:shadow-md transition-shadow cursor-pointer">
                  <CardContent className="p-0">
                    <div className="w-16 h-16 mx-auto mb-3 bg-red-500 rounded-lg flex items-center justify-center">
                      <div className="text-white font-bold text-2xl">▶</div>
                    </div>
                    <h4 className="font-medium text-gray-800">Vertexon Global</h4>
                  </CardContent>
                </Card>

                <Card className="p-6 text-center hover:shadow-md transition-shadow cursor-pointer">
                  <CardContent className="p-0">
                    <div className="w-16 h-16 mx-auto mb-3 bg-blue-600 rounded-lg flex items-center justify-center">
                      <div className="text-white font-bold text-2xl">A</div>
                    </div>
                    <h4 className="font-medium text-gray-800">Silvergate Enterprises</h4>
                  </CardContent>
                </Card>
              </div>
            </div>

            {/* DAP - Tier 2 */}
            <div className="mb-6">
              <div className="flex items-center gap-2 mb-4">
                <h3 className="font-medium text-gray-800">DAP - Tier 2</h3>
                <ChevronDown className="w-4 h-4 text-gray-500" />
              </div>
              <div className="grid grid-cols-4 gap-4">
                <Card className="p-6 text-center hover:shadow-md transition-shadow cursor-pointer">
                  <CardContent className="p-0">
                    <div className="w-16 h-16 mx-auto mb-3 bg-blue-700 rounded-lg flex items-center justify-center">
                      <span className="text-white font-bold text-lg">W</span>
                    </div>
                    <h4 className="font-medium text-gray-800">Auralink Systems</h4>
                  </CardContent>
                </Card>

                <Card className="p-6 text-center hover:shadow-md transition-shadow cursor-pointer">
                  <CardContent className="p-0">
                    <div className="w-16 h-16 mx-auto mb-3 bg-pink-400 rounded-lg flex items-center justify-center">
                      <span className="text-white font-bold text-lg">u</span>
                    </div>
                    <h4 className="font-medium text-gray-800">ProximaEdge Consulting</h4>
                  </CardContent>
                </Card>

                <Card className="p-6 text-center hover:shadow-md transition-shadow cursor-pointer">
                  <CardContent className="p-0">
                    <div className="w-16 h-16 mx-auto mb-3 bg-gray-100 rounded-lg flex items-center justify-center">
                      <div className="w-8 h-8 bg-purple-600 rounded-full flex items-center justify-center">
                        <span className="text-white text-xs">⚡</span>
                      </div>
                    </div>
                    <h4 className="font-medium text-gray-800">NimbusCore Analytics</h4>
                  </CardContent>
                </Card>

                <Card className="p-6 text-center hover:shadow-md transition-shadow cursor-pointer">
                  <CardContent className="p-0">
                    <div className="w-16 h-16 mx-auto mb-3 bg-blue-600 rounded-lg flex items-center justify-center">
                      <span className="text-white font-bold text-xs">IL</span>
                    </div>
                    <h4 className="font-medium text-gray-800">Ironleaf Industries</h4>
                  </CardContent>
                </Card>
              </div>
            </div>

            {/* Additional Row */}
            <div className="grid grid-cols-4 gap-4 mb-6">
              <Card className="p-6 text-center hover:shadow-md transition-shadow cursor-pointer">
                <CardContent className="p-0">
                  <div className="w-16 h-16 mx-auto mb-3 bg-blue-500 rounded-lg flex items-center justify-center">
                    <span className="text-white font-bold text-xs">StellarPath</span>
                  </div>
                  <h4 className="font-medium text-gray-800">StellarPath Logistics</h4>
                </CardContent>
              </Card>

              <Card className="p-6 text-center hover:shadow-md transition-shadow cursor-pointer">
                <CardContent className="p-0">
                  <div className="w-16 h-16 mx-auto mb-3 bg-red-700 rounded-lg flex items-center justify-center">
                    <span className="text-white font-bold text-lg">Quantum Harbor Capital</span>
                  </div>
                  <h4 className="font-medium text-gray-800">Quantum Harbor Capital</h4>
                </CardContent>
              </Card>

              <Card className="p-6 text-center hover:shadow-md transition-shadow cursor-pointer">
                <CardContent className="p-0">
                  <div className="w-16 h-16 mx-auto mb-3 bg-blue-900 rounded-lg flex items-center justify-center">
                    <span className="text-white font-bold text-xs">RCG</span>
                  </div>
                  <h4 className="font-medium text-gray-800">Redmond & Chase Group</h4>
                </CardContent>
              </Card>

              <Card className="p-6 text-center hover:shadow-md transition-shadow cursor-pointer">
                <CardContent className="p-0">
                  <div className="w-16 h-16 mx-auto mb-3 bg-orange-500 rounded-lg flex items-center justify-center">
                    <span className="text-white font-bold text-2xl">∞</span>
                  </div>
                  <h4 className="font-medium text-gray-800">Skybridge Ventures</h4>
                </CardContent>
              </Card>
            </div>

            {/* Another Row */}
            <div className="grid grid-cols-4 gap-4 mb-6">
              <Card className="p-6 text-center hover:shadow-md transition-shadow cursor-pointer">
                <CardContent className="p-0">
                  <div className="w-16 h-16 mx-auto mb-3 bg-gray-100 rounded-lg flex items-center justify-center">
                    <span className="text-gray-800 font-bold text-lg">🍋</span>
                  </div>
                  <h4 className="font-medium text-gray-800">Clearwave Communications</h4>
                </CardContent>
              </Card>

              <Card className="p-6 text-center hover:shadow-md transition-shadow cursor-pointer">
                <CardContent className="p-0">
                  <div className="w-16 h-16 mx-auto mb-3 bg-gray-100 rounded-lg flex items-center justify-center">
                    <span className="text-blue-600 font-bold text-xs">coupa</span>
                  </div>
                  <h4 className="font-medium text-gray-800">SummitForge Partners</h4>
                </CardContent>
              </Card>

              <Card className="p-6 text-center hover:shadow-md transition-shadow cursor-pointer">
                <CardContent className="p-0">
                  <div className="w-16 h-16 mx-auto mb-3 bg-orange-500 rounded-full flex items-center justify-center">
                    <span className="text-white font-bold text-lg">A</span>
                  </div>
                  <h4 className="font-medium text-gray-800">AtlasPrime Innovations</h4>
                </CardContent>
              </Card>

              
            </div>

            {/* Product Analytics */}
            <div className="mb-6">
              <div className="flex items-center gap-2 mb-4">
                <h3 className="font-medium text-gray-800">Product Analytics</h3>
                <ChevronDown className="w-4 h-4 text-gray-500" />
              </div>
              <div className="grid grid-cols-4 gap-4">
                <Card className="p-6 text-center hover:shadow-md transition-shadow cursor-pointer">
                  <CardContent className="p-0">
                    <div className="w-16 h-16 mx-auto mb-3 bg-purple-600 rounded-lg flex items-center justify-center">
                      <span className="text-white font-bold text-2xl">X</span>
                    </div>
                    <h4 className="font-medium text-gray-800">Cresthaven Dynamics</h4>
                  </CardContent>
                </Card>
              </div>
            </div>

            {/* Mirror Competitors */}
            <div className="mb-6">
              <div className="flex items-center gap-2 mb-4">
                <h3 className="font-medium text-gray-800">Mirror Competitors</h3>
                <ChevronDown className="w-4 h-4 text-gray-500" />
              </div>
              <div className="grid grid-cols-4 gap-4">
                <Card className="p-6 text-center hover:shadow-md transition-shadow cursor-pointer">
                  <CardContent className="p-0">
                    <div className="w-16 h-16 mx-auto mb-3 bg-orange-600 rounded-lg flex items-center justify-center">
                      <span className="text-white font-bold text-xs">PHG</span>
                    </div>
                    <h4 className="font-medium text-gray-800">Pinnacle Horizon Group</h4>
                  </CardContent>
                </Card>

                <Card className="p-6 text-center hover:shadow-md transition-shadow cursor-pointer">
                  <CardContent className="p-0">
                    <div className="w-16 h-16 mx-auto mb-3 bg-blue-400 rounded-full flex items-center justify-center">
                      <span className="text-white font-bold text-lg">360</span>
                    </div>
                    <h4 className="font-medium text-gray-800">Ironwood Strategies</h4>
                  </CardContent>
                </Card>
              </div>
            </div>

            {/* Klue Resources */}
            <div className="mb-6">
              <div className="flex items-center gap-2 mb-4">
                <h3 className="font-medium text-gray-800">Klue Resources</h3>
                <ChevronDown className="w-4 h-4 text-gray-500" />
              </div>
              <div className="grid grid-cols-4 gap-4">
                <Card className="p-6 text-center hover:shadow-md transition-shadow cursor-pointer">
                  <CardContent className="p-0">
                    <div className="w-16 h-16 mx-auto mb-3 bg-blue-900 rounded-lg flex items-center justify-center">
                      <span className="text-white font-bold text-xs">LT</span>
                    </div>
                    <h4 className="font-medium text-gray-800">LumenEdge Technologies</h4>
                  </CardContent>
                </Card>
              </div>
            </div>

            {/* Miscellaneous */}
            <div className="mb-6">
              <div className="flex items-center gap-2 mb-4">
                <h3 className="font-medium text-gray-800">Miscellaneous</h3>
                <ChevronDown className="w-4 h-4 text-gray-500" />
              </div>
              <div className="grid grid-cols-4 gap-4">
                <Card className="p-6 text-center hover:shadow-md transition-shadow cursor-pointer">
                  <CardContent className="p-0">
                    <div className="w-16 h-16 mx-auto mb-3 bg-green-500 rounded-lg flex items-center justify-center">
                      <span className="text-white font-bold text-lg">T</span>
                    </div>
                    <h4 className="font-medium text-gray-800">Brightwell Capital Partners</h4>
                  </CardContent>
                </Card>

                <Card className="p-6 text-center hover:shadow-md transition-shadow cursor-pointer">
                  <CardContent className="p-0">
                    <div className="w-16 h-16 mx-auto mb-3 bg-gray-100 rounded-lg flex items-center justify-center">
                      <span className="text-blue-600 font-bold text-xs">NV</span>
                    </div>
                    <h4 className="font-medium text-gray-800">Northgate Ventures</h4>
                  </CardContent>
                </Card>

                <Card className="p-6 text-center hover:shadow-md transition-shadow cursor-pointer">
                  <CardContent className="p-0">
                    <div className="w-16 h-16 mx-auto mb-3 bg-blue-900 rounded-lg flex items-center justify-center">
                      <span className="text-white font-bold text-xs">nexthink</span>
                    </div>
                    <h4 className="font-medium text-gray-800">Evercrest Solutions</h4>
                  </CardContent>
                </Card>

                <Card className="p-6 text-center hover:shadow-md transition-shadow cursor-pointer">
                  <CardContent className="p-0">
                    <div className="w-16 h-16 mx-auto mb-3 bg-teal-500 rounded-lg flex items-center justify-center">
                      <span className="text-white font-bold text-xs">HA</span>
                    </div>
                    <h4 className="font-medium text-gray-800">Harborstone Analytics</h4>
                  </CardContent>
                </Card>
              </div>

              <div className="grid grid-cols-4 gap-4 mt-4">
                <Card className="p-6 text-center hover:shadow-md transition-shadow cursor-pointer">
                  <CardContent className="p-0">
                    <div className="w-16 h-16 mx-auto mb-3 bg-gray-100 rounded-lg flex items-center justify-center">
                      <span className="text-blue-600 font-bold text-xs">TL</span>
                    </div>
                    <h4 className="font-medium text-gray-800">Truepath Logistics</h4>
                  </CardContent>
                </Card>

                <Card className="p-6 text-center hover:shadow-md transition-shadow cursor-pointer">
                  <CardContent className="p-0">
                    <div className="w-16 h-16 mx-auto mb-3 bg-blue-500 rounded-full flex items-center justify-center">
                      <span className="text-white font-bold text-lg">os</span>
                    </div>
                    <h4 className="font-medium text-gray-800">Optivista Systems</h4>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </main>

        {/* Right Sidebar - News */}
        <aside className="w-80 bg-white border-l border-gray-200 p-6">
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-2">
              <div className="w-6 h-6 bg-black rounded flex items-center justify-center">
                <span className="text-white text-xs">📰</span>
              </div>
              <h2 className="font-semibold">News</h2>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-sm text-gray-600">News</span>
              <div className="w-6 h-6 bg-purple-600 rounded-full flex items-center justify-center">
                <span className="text-white text-xs">?</span>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            {/* News Item 1 */}
            <div className="border-b border-gray-100 pb-6">
              <div className="flex items-center gap-2 mb-2">
                <div className="w-8 h-8 bg-blue-600 rounded flex items-center justify-center">
                  <span className="text-white font-bold text-sm">W</span>
                </div>
                <div>
                  <div className="text-xs text-gray-500">MAY 5, 2025</div>
                </div>
              </div>
              <h3 className="font-semibold text-sm mb-2">
                MetaRouter Expands Retail Media Innovation With Strategic Leadership Hires
              </h3>
              <p className="text-xs text-gray-600 mb-3">
                /PRNewswire/ -- MetaRouter, a leader in server-side tag management and pioneer in enterprise-grade data
                collection and integration, today announced the appointments of two...
              </p>
              <Button variant="outline" size="sm" className="text-blue-600 border-blue-600 text-xs bg-transparent">
                📖 Read More
              </Button>
              <div className="mt-2">
                <a href="#" className="text-xs text-blue-600 flex items-center gap-1">
                  www.prnewswire.com <ExternalLink className="w-3 h-3" />
                </a>
              </div>
            </div>

            {/* News Item 2 */}
            <div className="border-b border-gray-100 pb-6">
              <div className="flex items-center gap-2 mb-2">
                <div className="w-8 h-8 bg-blue-500 rounded flex items-center justify-center">
                  <span className="text-white font-bold text-xs">NovaSphere Technologies</span>
                </div>
                <div>
                  <div className="text-xs text-gray-500">APR 11, 2025</div>
                </div>
              </div>
              <h3 className="font-semibold text-sm mb-2">
                ABeam Consulting Partners with NovaSphere Technologies to Enhance Enterprise Management Services in Southeast Asia
              </h3>
              <p className="text-xs text-gray-600 mb-3">
                Summary: ABeam Consulting has partnered with NovaSphere Technologies, a leader in Digital Adoption Platform (DAP)
                technology, to enhance enterprise management services in Southeast Asia. This collaboration aims to
                revolutionize ERP implementation and digital transformation services, providing intuitive on-screen
                guidance, automated workflows, and real-time analytics to accelerate employee onboarding and improve
                workforce productivity. By prioritizing digital adoption, the partnership between ABeam Consulting and
                NovaSphere Technologies empowers organizations to maximize ROI from their technology investments, drive innovation, and
                navigate workforce transformation effectively. This strategic alliance reflects a commitment to client
                success and enabling smarter, more efficient organizations in a rapidly evolving digital economy.
              </p>
              <Button variant="outline" size="sm" className="text-blue-600 border-blue-600 text-xs bg-transparent">
                📖 Read More
              </Button>
              <div className="mt-2">
                <a href="#" className="text-xs text-blue-600 flex items-center gap-1">
                  www.businesswire.com <ExternalLink className="w-3 h-3" />
                </a>
              </div>
            </div>

            {/* News Item 3 */}
            <div className="border-b border-gray-100 pb-6">
              <div className="flex items-center gap-2 mb-2">
                <div className="w-8 h-8 bg-blue-400 rounded-full flex items-center justify-center">
                  <span className="text-white font-bold text-lg">360</span>
                </div>
                <div>
                  <div className="text-xs text-gray-500">MAR 19, 2025</div>
                </div>
              </div>
              <h3 className="font-semibold text-sm mb-2">
                The University of Kentucky Prepares Nursing Students for the Unpredictable With Articulate 360
              </h3>
              <div className="bg-yellow-200 h-1 w-full mb-3"></div>
              <div className="text-xs text-gray-600 mb-2">
                <span className="font-medium">Akanksha S.</span>
                <span className="ml-2 text-gray-500">MAR 19</span>
              </div>
              <p className="text-sm font-medium mb-3">The University of Kentucky is an Articulate 360 customer</p>
              <p className="text-xs text-gray-600 mb-3">
                The Answer With Articulate 360, UK College of Nursing improves the efficiency of creating high-quality
                courses Today, the College of Nursing uses both Storyline and Rise t...
              </p>
              <Button variant="outline" size="sm" className="text-blue-600 border-blue-600 text-xs bg-transparent">
                📖 Read More
              </Button>
              <div className="mt-2">
                <a href="#" className="text-xs text-blue-600 flex items-center gap-1">
                  www.articulate.com <ExternalLink className="w-3 h-3" />
                </a>
              </div>
            </div>

            {/* News Item 4 */}
            <div className="border-b border-gray-100 pb-6">
              <div className="flex items-center gap-2 mb-2">
                <div className="w-8 h-8 bg-purple-600 rounded flex items-center justify-center">
                  <div className="text-white font-bold text-xs flex items-center">
                    <span className="mr-1">U</span>
                    <span className="text-xs">5</span>
                    <span className="ml-1">more</span>
                  </div>
                </div>
                <div>
                  <div className="text-xs text-gray-500">MAR 18, 2025</div>
                </div>
              </div>
              <h3 className="font-semibold text-sm mb-2">
                The Top User Onboarding Software Vendors According to the FeaturedCustomers Winter 2025 Customer Success
                Report Rankings
              </h3>
              <div className="bg-yellow-200 h-1 w-full mb-3"></div>
              <div className="text-xs text-gray-600 mb-2">
                <span className="font-medium">Akanksha S.</span>
                <span className="ml-2 text-gray-500">MAR 19</span>
              </div>
              <p className="text-xs text-gray-600 mb-3">
                Intercom, Pendo, Skilljar, NovaSphere Technologies, and Whatfix were given the highest "Market Leader" award in Winter
                2025 User Onboarding Software Customer Success Report.
              </p>
              <p className="text-xs text-gray-600 mb-3">
                {"> > > >"} FeaturedCustomers releases the Winter 2025 User Onboarding Software Customer Success Report.
                SUNRISE, FL, UNITED STATES, March 18, 2025 / / Today...
              </p>
              <Button variant="outline" size="sm" className="text-blue-600 border-blue-600 text-xs bg-transparent">
                📖 Read More
              </Button>
              <div className="mt-2">
                <a href="#" className="text-xs text-blue-600 flex items-center gap-1">
                  www.thebusinessgazetteonline.com <ExternalLink className="w-3 h-3" />
                </a>
              </div>
            </div>
          </div>
        </aside>

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
