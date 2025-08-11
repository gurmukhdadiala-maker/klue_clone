import { Search, Menu, ChevronDown, ExternalLink } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent } from "@/components/ui/card"

export default function KlueDashboard() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Browser Tabs Simulation */}
      <div className="bg-gray-800 text-white text-xs py-1 px-4 flex items-center gap-2">
        <div className="flex items-center gap-1">
          <div className="w-3 h-3 bg-red-500 rounded-full"></div>
          <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
          <div className="w-3 h-3 bg-green-500 rounded-full"></div>
        </div>
        <div className="flex items-center gap-2 ml-4">
          <span className="bg-orange-600 px-2 py-1 rounded text-xs">Whatfix</span>
          <span className="bg-gray-600 px-2 py-1 rounded text-xs">Jump...</span>
          <span className="bg-blue-600 px-2 py-1 rounded text-xs">K Klue</span>
          <span className="bg-gray-600 px-2 py-1 rounded text-xs">What...</span>
          <span className="bg-orange-600 px-2 py-1 rounded text-xs">Cont...</span>
          <span className="bg-red-600 px-2 py-1 rounded text-xs">Inbo...</span>
          <span className="bg-orange-600 px-2 py-1 rounded text-xs">user...</span>
          <span className="bg-green-600 px-2 py-1 rounded text-xs">Wha...</span>
          <span className="bg-gray-600 px-2 py-1 rounded text-xs">Micr...</span>
          <span className="bg-blue-600 px-2 py-1 rounded text-xs">Micr...</span>
          <span className="bg-blue-600 px-2 py-1 rounded text-xs">Mail</span>
          <span className="bg-orange-600 px-2 py-1 rounded text-xs">Goo...</span>
          <span className="bg-gray-600 px-2 py-1 rounded text-xs">New</span>
        </div>
      </div>

      {/* Address Bar */}
      <div className="bg-gray-700 text-white text-sm py-2 px-4 flex items-center gap-4">
        <div className="flex items-center gap-2">
          <button className="text-gray-300">←</button>
          <button className="text-gray-300">→</button>
          <button className="text-gray-300">↻</button>
        </div>
        <div className="flex-1 bg-gray-600 rounded px-3 py-1 text-sm">
          v2.app.klue.com/dashboard?group=-1&sort=alpha-rev
        </div>
        <div className="flex items-center gap-2">
          <button className="text-gray-300">⭐</button>
          <button className="text-gray-300">🔥</button>
          <div className="w-6 h-6 bg-blue-500 rounded-full"></div>
        </div>
      </div>

      {/* Navigation Header */}
      <header className="bg-white border-b border-gray-200 px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-4">
              <Menu className="w-5 h-5 text-gray-600" />
              <span className="font-bold text-lg">HOME</span>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
              <Input placeholder="Search Klue" className="pl-10 w-80 bg-gray-50 border-gray-200" />
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
              <span className="text-purple-600">What questions can I ask to deposition Pendo?</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-blue-500">🎯</span>
              <span className="text-purple-600">What are Clicklearn's weaknesses?</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-green-500">📊</span>
              <span className="text-purple-600">Our top 3 selling points against SAP</span>
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
                <Card className="p-6 text-center hover:shadow-md transition-shadow">
                  <CardContent className="p-0">
                    <div className="w-16 h-16 mx-auto mb-3 bg-purple-600 rounded-lg flex items-center justify-center">
                      <div className="text-white font-bold text-xl">U</div>
                    </div>
                    <h4 className="font-medium text-gray-800">Userlane</h4>
                  </CardContent>
                </Card>

                <Card className="p-6 text-center hover:shadow-md transition-shadow">
                  <CardContent className="p-0">
                    <div className="w-16 h-16 mx-auto mb-3 bg-blue-500 rounded-lg flex items-center justify-center">
                      <span className="text-white text-xs font-bold">walkme</span>
                    </div>
                    <h4 className="font-medium text-gray-800">SAP - WalkMe</h4>
                  </CardContent>
                </Card>

                <Card className="p-6 text-center hover:shadow-md transition-shadow">
                  <CardContent className="p-0">
                    <div className="w-16 h-16 mx-auto mb-3 bg-red-500 rounded-lg flex items-center justify-center">
                      <div className="text-white font-bold text-2xl">▶</div>
                    </div>
                    <h4 className="font-medium text-gray-800">Pendo</h4>
                  </CardContent>
                </Card>

                <Card className="p-6 text-center hover:shadow-md transition-shadow">
                  <CardContent className="p-0">
                    <div className="w-16 h-16 mx-auto mb-3 bg-blue-600 rounded-lg flex items-center justify-center">
                      <div className="text-white font-bold text-2xl">A</div>
                    </div>
                    <h4 className="font-medium text-gray-800">Appcues</h4>
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
                <Card className="p-6 text-center hover:shadow-md transition-shadow">
                  <CardContent className="p-0">
                    <div className="w-16 h-16 mx-auto mb-3 bg-blue-700 rounded-lg flex items-center justify-center">
                      <span className="text-white font-bold text-lg">W</span>
                    </div>
                    <h4 className="font-medium text-gray-800">Workday</h4>
                  </CardContent>
                </Card>

                <Card className="p-6 text-center hover:shadow-md transition-shadow">
                  <CardContent className="p-0">
                    <div className="w-16 h-16 mx-auto mb-3 bg-pink-400 rounded-lg flex items-center justify-center">
                      <span className="text-white font-bold text-lg">u</span>
                    </div>
                    <h4 className="font-medium text-gray-800">Userpilot</h4>
                  </CardContent>
                </Card>

                <Card className="p-6 text-center hover:shadow-md transition-shadow">
                  <CardContent className="p-0">
                    <div className="w-16 h-16 mx-auto mb-3 bg-gray-100 rounded-lg flex items-center justify-center">
                      <div className="w-8 h-8 bg-purple-600 rounded-full flex items-center justify-center">
                        <span className="text-white text-xs">⚡</span>
                      </div>
                    </div>
                    <h4 className="font-medium text-gray-800">Spekit</h4>
                  </CardContent>
                </Card>

                <Card className="p-6 text-center hover:shadow-md transition-shadow">
                  <CardContent className="p-0">
                    <div className="w-16 h-16 mx-auto mb-3 bg-blue-600 rounded-lg flex items-center justify-center">
                      <span className="text-white font-bold text-xs">SAP</span>
                    </div>
                    <h4 className="font-medium text-gray-800">SAP EnableNow</h4>
                  </CardContent>
                </Card>
              </div>
            </div>

            {/* Additional Row */}
            <div className="grid grid-cols-4 gap-4 mb-6">
              <Card className="p-6 text-center hover:shadow-md transition-shadow">
                <CardContent className="p-0">
                  <div className="w-16 h-16 mx-auto mb-3 bg-blue-500 rounded-lg flex items-center justify-center">
                    <span className="text-white font-bold text-xs">salesforce</span>
                  </div>
                  <h4 className="font-medium text-gray-800">Salesforce In-App Gui...</h4>
                </CardContent>
              </Card>

              <Card className="p-6 text-center hover:shadow-md transition-shadow">
                <CardContent className="p-0">
                  <div className="w-16 h-16 mx-auto mb-3 bg-red-700 rounded-lg flex items-center justify-center">
                    <span className="text-white font-bold text-lg">ORACLE</span>
                  </div>
                  <h4 className="font-medium text-gray-800">OGL</h4>
                </CardContent>
              </Card>

              <Card className="p-6 text-center hover:shadow-md transition-shadow">
                <CardContent className="p-0">
                  <div className="w-16 h-16 mx-auto mb-3 bg-blue-900 rounded-lg flex items-center justify-center">
                    <span className="text-white font-bold text-xs">nexthink</span>
                  </div>
                  <h4 className="font-medium text-gray-800">Nexthink Adopt</h4>
                </CardContent>
              </Card>

              <Card className="p-6 text-center hover:shadow-md transition-shadow">
                <CardContent className="p-0">
                  <div className="w-16 h-16 mx-auto mb-3 bg-orange-500 rounded-lg flex items-center justify-center">
                    <span className="text-white font-bold text-2xl">∞</span>
                  </div>
                  <h4 className="font-medium text-gray-800">Netcore Cloud</h4>
                </CardContent>
              </Card>
            </div>

            {/* Another Row */}
            <div className="grid grid-cols-4 gap-4 mb-6">
              <Card className="p-6 text-center hover:shadow-md transition-shadow">
                <CardContent className="p-0">
                  <div className="w-16 h-16 mx-auto mb-3 bg-gray-100 rounded-lg flex items-center justify-center">
                    <span className="text-gray-800 font-bold text-lg">🍋</span>
                  </div>
                  <h4 className="font-medium text-gray-800">Lemon Learning</h4>
                </CardContent>
              </Card>

              <Card className="p-6 text-center hover:shadow-md transition-shadow">
                <CardContent className="p-0">
                  <div className="w-16 h-16 mx-auto mb-3 bg-gray-100 rounded-lg flex items-center justify-center">
                    <span className="text-blue-600 font-bold text-xs">coupa</span>
                  </div>
                  <h4 className="font-medium text-gray-800">Coupa Guided Buying</h4>
                </CardContent>
              </Card>

              <Card className="p-6 text-center hover:shadow-md transition-shadow">
                <CardContent className="p-0">
                  <div className="w-16 h-16 mx-auto mb-3 bg-orange-500 rounded-full flex items-center justify-center">
                    <span className="text-white font-bold text-lg">A</span>
                  </div>
                  <h4 className="font-medium text-gray-800">Apty</h4>
                </CardContent>
              </Card>

              <Card className="p-6 text-center hover:shadow-md transition-shadow">
                <CardContent className="p-0">
                  <div className="w-16 h-16 mx-auto mb-3 bg-white border-2 border-gray-200 rounded-lg"></div>
                  <h4 className="font-medium text-gray-800"></h4>
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
                <Card className="p-6 text-center hover:shadow-md transition-shadow">
                  <CardContent className="p-0">
                    <div className="w-16 h-16 mx-auto mb-3 bg-purple-600 rounded-lg flex items-center justify-center">
                      <span className="text-white font-bold text-2xl">X</span>
                    </div>
                    <h4 className="font-medium text-gray-800">Mixpanel</h4>
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
                <Card className="p-6 text-center hover:shadow-md transition-shadow">
                  <CardContent className="p-0">
                    <div className="w-16 h-16 mx-auto mb-3 bg-orange-600 rounded-lg flex items-center justify-center">
                      <span className="text-white font-bold text-xs">assima</span>
                    </div>
                    <h4 className="font-medium text-gray-800">Assima</h4>
                  </CardContent>
                </Card>

                <Card className="p-6 text-center hover:shadow-md transition-shadow">
                  <CardContent className="p-0">
                    <div className="w-16 h-16 mx-auto mb-3 bg-blue-400 rounded-full flex items-center justify-center">
                      <span className="text-white font-bold text-lg">360</span>
                    </div>
                    <h4 className="font-medium text-gray-800">Articulate</h4>
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
                <Card className="p-6 text-center hover:shadow-md transition-shadow">
                  <CardContent className="p-0">
                    <div className="w-16 h-16 mx-auto mb-3 bg-blue-900 rounded-lg flex items-center justify-center">
                      <span className="text-white font-bold text-xs">nexthink</span>
                    </div>
                    <h4 className="font-medium text-gray-800">Nexthink Adopt</h4>
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
                <Card className="p-6 text-center hover:shadow-md transition-shadow">
                  <CardContent className="p-0">
                    <div className="w-16 h-16 mx-auto mb-3 bg-green-500 rounded-lg flex items-center justify-center">
                      <span className="text-white font-bold text-lg">T</span>
                    </div>
                    <h4 className="font-medium text-gray-800">Toonimo</h4>
                  </CardContent>
                </Card>

                <Card className="p-6 text-center hover:shadow-md transition-shadow">
                  <CardContent className="p-0">
                    <div className="w-16 h-16 mx-auto mb-3 bg-gray-100 rounded-lg flex items-center justify-center">
                      <span className="text-blue-600 font-bold text-xs">stonly</span>
                    </div>
                    <h4 className="font-medium text-gray-800">Stonly</h4>
                  </CardContent>
                </Card>

                <Card className="p-6 text-center hover:shadow-md transition-shadow">
                  <CardContent className="p-0">
                    <div className="w-16 h-16 mx-auto mb-3 bg-blue-900 rounded-lg flex items-center justify-center">
                      <span className="text-white font-bold text-xs">nexthink</span>
                    </div>
                    <h4 className="font-medium text-gray-800">Nexthink Adopt</h4>
                  </CardContent>
                </Card>

                <Card className="p-6 text-center hover:shadow-md transition-shadow">
                  <CardContent className="p-0">
                    <div className="w-16 h-16 mx-auto mb-3 bg-teal-500 rounded-lg flex items-center justify-center">
                      <span className="text-white font-bold text-xs">myMeta</span>
                    </div>
                    <h4 className="font-medium text-gray-800">MyMeta</h4>
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
                  <span className="text-white font-bold text-xs">walkme</span>
                </div>
                <div>
                  <div className="text-xs text-gray-500">APR 11, 2025</div>
                </div>
              </div>
              <h3 className="font-semibold text-sm mb-2">
                ABeam Consulting Partners with WalkMe to Enhance Enterprise Management Services in Southeast Asia
              </h3>
              <p className="text-xs text-gray-600 mb-3">
                Summary: ABeam Consulting has partnered with WalkMe, a leader in Digital Adoption Platform (DAP)
                technology, to enhance enterprise management services in Southeast Asia. This collaboration aims to
                revolutionize ERP implementation and digital transformation services, providing intuitive on-screen
                guidance, automated workflows, and real-time analytics to accelerate employee onboarding and improve
                workforce productivity. By prioritizing digital adoption, the partnership between ABeam Consulting and
                WalkMe empowers organizations to maximize ROI from their technology investments, drive innovation, and
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
              <p className="text-sm font-medium mb-3">The University of Kentucky is an Articulate 360 customer</p>
              <p className="text-xs text-gray-600 mb-3">
                Intercom, Pendo, Skilljar, WalkMe, and Whatfix were given the highest "Market Leader" award in Winter
                2025 User Onboarding Software Customer Success Report.
              </p>
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
