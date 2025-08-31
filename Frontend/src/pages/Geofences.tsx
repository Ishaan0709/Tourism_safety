import Layout from "@/components/Layout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  Shield, 
  MapPin, 
  Plus, 
  Edit, 
  Trash2, 
  Eye, 
  Clock,
  AlertTriangle,
  ToggleLeft,
  ToggleRight
} from "lucide-react";
import { Link } from "react-router-dom";

const Geofences = () => {
  const geofences = [
    {
      id: "GF-001",
      name: "Restricted Beach Area",
      type: "Restricted Zone",
      riskLevel: "High", 
      coordinates: "15.2993° N, 74.1240° E",
      radius: "500m",
      activeHours: "24/7",
      status: "Active",
      tourists: 0,
      alerts: 3,
      createdDate: "2024-01-10"
    },
    {
      id: "GF-002", 
      name: "Tourist Safe Zone",
      type: "Safe Zone",
      riskLevel: "Low",
      coordinates: "15.3045° N, 74.1195° E", 
      radius: "2km",
      activeHours: "06:00 - 22:00",
      status: "Active",
      tourists: 1247,
      alerts: 0,
      createdDate: "2024-01-08"
    },
    {
      id: "GF-003",
      name: "Construction Zone A",
      type: "Danger Zone", 
      riskLevel: "Critical",
      coordinates: "15.2967° N, 74.1289° E",
      radius: "200m", 
      activeHours: "24/7",
      status: "Active",
      tourists: 0,
      alerts: 7,
      createdDate: "2024-01-12"
    },
    {
      id: "GF-004",
      name: "Night Market Area",
      type: "Monitored Zone",
      riskLevel: "Medium",
      coordinates: "15.3012° N, 74.1223° E",
      radius: "800m",
      activeHours: "18:00 - 02:00", 
      status: "Inactive",
      tourists: 0,
      alerts: 0,
      createdDate: "2024-01-05"
    }
  ];

  return (
    <Layout>
      <div className="h-[calc(100vh-4rem)] flex">
        {/* Geofence List */}
        <div className="w-96 bg-card border-r border-border p-6 overflow-y-auto">
          <div className="space-y-4">
            {/* Header */}
            <div className="flex items-center justify-between">
              <div>
                <h1 className="text-xl font-bold">Geofence Management</h1>
                <p className="text-sm text-muted-foreground">Define and monitor zones</p>
              </div>
              
              <Button size="sm" className="gap-2">
                <Plus className="h-4 w-4" />
                Create New
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-3">
              <Card>
                <CardContent className="p-3 text-center">
                  <p className="text-2xl font-bold text-primary">{geofences.filter(f => f.status === "Active").length}</p>
                  <p className="text-xs text-muted-foreground">Active Fences</p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-3 text-center">
                  <p className="text-2xl font-bold text-alert-warning">{geofences.reduce((sum, f) => sum + f.alerts, 0)}</p>
                  <p className="text-xs text-muted-foreground">Total Alerts</p>
                </CardContent>
              </Card>
            </div>

            {/* Geofence List */}
            <div className="space-y-3">
              {geofences.map((fence) => (
                <Card key={fence.id} className="cursor-pointer hover:shadow-md transition-shadow">
                  <CardContent className="p-4">
                    <div className="space-y-3">
                      {/* Header */}
                      <div className="flex items-start justify-between">
                        <div>
                          <h3 className="font-medium text-sm">{fence.name}</h3>
                          <p className="text-xs text-muted-foreground">{fence.id}</p>
                        </div>
                        <div className="flex items-center gap-1">
                          <Badge 
                            variant={fence.status === "Active" ? "default" : "secondary"}
                            className="text-xs"
                          >
                            {fence.status}
                          </Badge>
                        </div>
                      </div>

                      {/* Risk Level */}
                      <div>
                        <Badge 
                          className={`text-xs ${
                            fence.riskLevel === "Critical" ? "bg-alert-critical" :
                            fence.riskLevel === "High" ? "bg-alert-warning" :
                            fence.riskLevel === "Medium" ? "bg-alert-info" :
                            "bg-status-active"
                          }`}
                        >
                          {fence.riskLevel} Risk
                        </Badge>
                      </div>

                      {/* Details */}
                      <div className="space-y-1 text-xs text-muted-foreground">
                        <div className="flex items-center gap-1">
                          <MapPin className="h-3 w-3" />
                          <span>{fence.radius} radius</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Clock className="h-3 w-3" />
                          <span>{fence.activeHours}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Shield className="h-3 w-3" />
                          <span>{fence.tourists} tourists inside</span>
                        </div>
                        {fence.alerts > 0 && (
                          <div className="flex items-center gap-1 text-alert-warning">
                            <AlertTriangle className="h-3 w-3" />
                            <span>{fence.alerts} active alerts</span>
                          </div>
                        )}
                      </div>

                      {/* Actions */}
                      <div className="flex items-center justify-between pt-2 border-t">
                        <div className="flex items-center gap-1">
                          <Button variant="ghost" size="sm" className="h-6 w-6 p-0">
                            <Eye className="h-3 w-3" />
                          </Button>
                          <Button variant="ghost" size="sm" className="h-6 w-6 p-0">
                            <Edit className="h-3 w-3" />
                          </Button>
                          <Button variant="ghost" size="sm" className="h-6 w-6 p-0 text-alert-critical">
                            <Trash2 className="h-3 w-3" />
                          </Button>
                        </div>
                        
                        <Button variant="ghost" size="sm" className="h-6 text-xs">
                          {fence.status === "Active" ? (
                            <ToggleRight className="h-4 w-4 text-status-active" />
                          ) : (
                            <ToggleLeft className="h-4 w-4 text-muted-foreground" />
                          )}
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>

        {/* Map Editor */}
        <div className="flex-1 relative">
          {/* Top Controls */}
          <div className="absolute top-4 left-4 right-4 z-10 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <Card className="p-2">
                <div className="flex items-center gap-2 text-sm">
                  <Shield className="h-4 w-4 text-primary" />
                  <span className="font-medium">Geofence Editor</span>
                </div>
              </Card>
            </div>

            <div className="flex items-center gap-2">
              <Button variant="outline" size="sm" asChild>
                <Link to="/map" className="gap-2">
                  <MapPin className="h-4 w-4" />
                  View on Live Map
                </Link>
              </Button>
              <Button variant="outline" size="sm" asChild>
                <Link to="/dashboard" className="gap-2">
                  <Shield className="h-4 w-4" />
                  Back to Dashboard
                </Link>
              </Button>
            </div>
          </div>

          {/* Map Placeholder */}
          <div className="h-full bg-gradient-to-br from-primary/20 via-background to-secondary/20 flex items-center justify-center">
            <div className="text-center space-y-4">
              <Shield className="h-24 w-24 text-primary mx-auto" />
              <div>
                <h2 className="text-2xl font-bold text-primary">Geofence Map Editor</h2>
                <p className="text-muted-foreground">Draw and manage geographic boundaries</p>
                <p className="text-sm text-muted-foreground mt-2">
                  Connect to Supabase and add Mapbox integration to enable map editing
                </p>
              </div>
              
              {/* Instructions */}
              <div className="max-w-md mx-auto text-left bg-card/95 backdrop-blur rounded-lg p-4 border">
                <h3 className="font-semibold text-sm mb-3">How to create geofences:</h3>
                <ol className="text-sm text-muted-foreground space-y-1 list-decimal list-inside">
                  <li>Click "Create New" to start drawing mode</li>
                  <li>Click on map to place polygon points</li>
                  <li>Set risk level (Low/Medium/High/Critical)</li>
                  <li>Configure active hours (24/7 or specific times)</li>
                  <li>Save to activate the geofence</li>
                </ol>
              </div>

              {/* Visual Examples */}
              <div className="flex items-center justify-center gap-8 text-sm mt-6">
                <div className="flex items-center gap-2">
                  <div className="w-4 h-4 bg-status-active rounded border-2 border-status-active/50"></div>
                  <span>Safe Zones</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-4 h-4 bg-alert-warning rounded border-2 border-alert-warning/50"></div>
                  <span>Monitored Areas</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-4 h-4 bg-alert-critical rounded border-2 border-alert-critical/50"></div>
                  <span>Restricted Zones</span>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Panel - Create/Edit Form */}
          <div className="absolute bottom-4 left-4 right-4 z-10">
            <Card className="bg-card/95 backdrop-blur">
              <CardHeader className="pb-3">
                <CardTitle className="text-base">Create New Geofence</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid gap-4 md:grid-cols-4">
                  <div>
                    <label className="text-sm font-medium">Zone Name</label>
                    <p className="text-xs text-muted-foreground">Descriptive name for this area</p>
                  </div>
                  <div>
                    <label className="text-sm font-medium">Risk Level</label>
                    <div className="flex gap-1 mt-1">
                      <Badge className="bg-status-active text-xs cursor-pointer">Low</Badge>
                      <Badge variant="outline" className="text-xs cursor-pointer">Medium</Badge>
                      <Badge variant="outline" className="text-xs cursor-pointer">High</Badge>
                      <Badge variant="outline" className="text-xs cursor-pointer">Critical</Badge>
                    </div>
                  </div>
                  <div>
                    <label className="text-sm font-medium">Active Hours</label>
                    <p className="text-xs text-muted-foreground">When alerts are triggered</p>
                  </div>
                  <div>
                    <Button size="sm" className="w-full">Save Geofence</Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Geofences;