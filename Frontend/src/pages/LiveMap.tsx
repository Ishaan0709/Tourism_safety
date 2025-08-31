import Layout from "@/components/Layout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { 
  MapPin, 
  Filter, 
  Search, 
  Users, 
  AlertTriangle,
  Shield,
  Clock,
  Eye,
  Phone,
  FileText
} from "lucide-react";
import { Link } from "react-router-dom";

const LiveMap = () => {
  const mapFilters = [
    { id: "all", label: "All", count: 2847, active: true },
    { id: "panic", label: "Panic", count: 3, active: false },
    { id: "inactivity", label: "Inactivity", count: 15, active: false },
    { id: "geofence", label: "Geofence", count: 5, active: false },
  ];

  const selectedTourist = {
    name: "Ramesh Kumar",
    tid: "TID-2023-001847",
    phone: "+91 98765 43210",
    lastSeen: "2 mins ago",
    location: "Beach Road, Zone A",
    status: "Active",
    emergency: "Rajesh Kumar (+91 98765 43211)"
  };

  return (
    <Layout>
      <div className="h-[calc(100vh-4rem)] flex">
        {/* Map Area */}
        <div className="flex-1 relative">
          {/* Top Controls Bar */}
          <div className="absolute top-4 left-4 right-4 z-10 flex items-center justify-between">
            <div className="flex items-center gap-3">
              {/* Filters */}
              <div className="flex items-center gap-2 bg-card/95 backdrop-blur rounded-lg p-2 shadow-lg">
                {mapFilters.map((filter) => (
                  <Button
                    key={filter.id}
                    variant={filter.active ? "default" : "ghost"}
                    size="sm"
                    className="gap-2"
                  >
                    {filter.label}
                    <Badge variant="secondary" className="text-xs">
                      {filter.count}
                    </Badge>
                  </Button>
                ))}
              </div>

              {/* Trail Controls */}
              <div className="flex items-center gap-2 bg-card/95 backdrop-blur rounded-lg p-2 shadow-lg">
                <Button variant="outline" size="sm">15m</Button>
                <Button variant="ghost" size="sm">1h</Button>
                <Button variant="ghost" size="sm">6h</Button>
              </div>
            </div>

            {/* Search & Actions */}
            <div className="flex items-center gap-3">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <Input
                  placeholder="Search name, TID, or phone..."
                  className="pl-10 w-80 bg-card/95 backdrop-blur"
                />
              </div>
              
              <Button variant="outline" size="sm" asChild>
                <Link to="/alerts" className="gap-2">
                  <AlertTriangle className="h-4 w-4" />
                  Go to Alerts
                </Link>
              </Button>
              
              <Button variant="outline" size="sm" asChild>
                <Link to="/fences" className="gap-2">
                  <Shield className="h-4 w-4" />
                  Manage Fences
                </Link>
              </Button>
            </div>
          </div>

          {/* Map Placeholder */}
          <div className="h-full bg-gradient-to-br from-primary/20 via-background to-secondary/20 flex items-center justify-center">
            <div className="text-center space-y-4">
              <MapPin className="h-24 w-24 text-primary mx-auto" />
              <div>
                <h2 className="text-2xl font-bold text-primary">Live Tourist Map</h2>
                <p className="text-muted-foreground">Real-time location monitoring</p>
                <p className="text-sm text-muted-foreground mt-2">
                  For map integration, connect to Supabase and add Mapbox token
                </p>
              </div>
              <div className="flex items-center justify-center gap-4 text-sm">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-status-active rounded-full"></div>
                  <span>Active (2,839)</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-alert-warning rounded-full"></div>
                  <span>Alerts (23)</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-alert-critical rounded-full"></div>
                  <span>Emergency (3)</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right Drawer (Tourist Details) */}
        <div className="w-96 bg-card border-l border-border p-6 overflow-y-auto">
          <div className="space-y-6">
            {/* Selected Tourist Header */}
            <div>
              <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
                <Users className="h-5 w-5" />
                Tourist Details
              </h3>
              
              <Card>
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div>
                      <CardTitle className="text-base">{selectedTourist.name}</CardTitle>
                      <p className="text-sm text-muted-foreground">{selectedTourist.tid}</p>
                    </div>
                    <Badge className="bg-status-active">
                      {selectedTourist.status}
                    </Badge>
                  </div>
                </CardHeader>
                
                <CardContent className="space-y-4">
                  <div className="space-y-3">
                    <div className="flex items-center gap-3 text-sm">
                      <MapPin className="h-4 w-4 text-muted-foreground" />
                      <div>
                        <p className="font-medium">{selectedTourist.location}</p>
                        <p className="text-muted-foreground">{selectedTourist.lastSeen}</p>
                      </div>
                    </div>
                    
                    <div className="flex items-center gap-3 text-sm">
                      <Phone className="h-4 w-4 text-muted-foreground" />
                      <p>{selectedTourist.phone}</p>
                    </div>
                    
                    <div className="flex items-center gap-3 text-sm">
                      <AlertTriangle className="h-4 w-4 text-muted-foreground" />
                      <div>
                        <p className="font-medium">Emergency Contact</p>
                        <p className="text-muted-foreground">{selectedTourist.emergency}</p>
                      </div>
                    </div>
                  </div>

                  {/* Quick Actions */}
                  <div className="grid grid-cols-2 gap-2 pt-4 border-t">
                    <Button variant="outline" size="sm" className="gap-2">
                      <Eye className="h-4 w-4" />
                      Acknowledge
                    </Button>
                    <Button variant="outline" size="sm" className="gap-2">
                      <Phone className="h-4 w-4" />
                      Dispatch
                    </Button>
                  </div>
                  
                  <Button className="w-full gap-2" asChild>
                    <Link to={`/tourists/${selectedTourist.tid}`}>
                      <Users className="h-4 w-4" />
                      Open Full Profile
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            </div>

            {/* Recent Activity */}
            <div>
              <h4 className="font-semibold mb-3 flex items-center gap-2">
                <Clock className="h-4 w-4" />
                Recent Activity
              </h4>
              
              <div className="space-y-3">
                {[
                  { time: "2 mins ago", action: "Entered Zone A", type: "info" },
                  { time: "15 mins ago", action: "Location updated", type: "success" },
                  { time: "45 mins ago", action: "Checked in at hotel", type: "info" },
                ].map((activity, index) => (
                  <div key={index} className="flex items-center gap-3 p-2 rounded bg-background/50">
                    <div className={`w-2 h-2 rounded-full ${
                      activity.type === "success" ? "bg-status-active" :
                      activity.type === "warning" ? "bg-alert-warning" :
                      "bg-alert-info"
                    }`}></div>
                    <div className="flex-1">
                      <p className="text-sm font-medium">{activity.action}</p>
                      <p className="text-xs text-muted-foreground">{activity.time}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default LiveMap;