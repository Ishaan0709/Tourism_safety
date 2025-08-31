import Layout from "@/components/Layout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Checkbox } from "@/components/ui/checkbox";
import { 
  AlertTriangle, 
  Clock, 
  MapPin, 
  Users, 
  FileText,
  Eye,
  CheckCircle,
  UserCheck,
  X
} from "lucide-react";
import { Link } from "react-router-dom";

const Alerts = () => {
  const alerts = [
    {
      id: "ALT-001",
      time: "14:32",
      type: "Geofence Breach",
      tourist: "Ramesh Kumar",
      touristId: "TID-2023-001847", 
      zone: "Restricted Area - Zone A",
      status: "Open",
      sla: "2m remaining",
      priority: "High"
    },
    {
      id: "ALT-002",
      time: "14:28",
      type: "Inactivity Alert", 
      tourist: "Priya Sharma",
      touristId: "TID-2023-001856",
      zone: "No movement for 45 minutes",
      status: "Acknowledged",
      sla: "15m remaining", 
      priority: "Medium"
    },
    {
      id: "ALT-003",
      time: "14:15",
      type: "Panic Button",
      tourist: "John Miller", 
      touristId: "TID-2023-001723",
      zone: "Market Street coordinates",
      status: "In Progress",
      sla: "Overdue by 5m",
      priority: "Critical"
    },
    {
      id: "ALT-004", 
      time: "14:10",
      type: "Signal Drop",
      tourist: "Sarah Wilson",
      touristId: "TID-2023-001634",
      zone: "Last known: Hotel District",
      status: "Open",
      sla: "8m remaining",
      priority: "Medium"
    }
  ];

  const selectedAlert = alerts[0];

  return (
    <Layout>
      <div className="h-[calc(100vh-4rem)] flex">
        {/* Alerts Table */}
        <div className="flex-1 p-6">
          <div className="space-y-4">
            {/* Header */}
            <div className="flex items-center justify-between">
              <div>
                <h1 className="text-2xl font-bold">Alert Management</h1>
                <p className="text-muted-foreground">Monitor and respond to tourist safety incidents</p>
              </div>
              
              <div className="flex items-center gap-2">
                <Badge variant="outline" className="gap-1">
                  <AlertTriangle className="h-3 w-3" />
                  23 Open Alerts
                </Badge>
              </div>
            </div>

            {/* Bulk Actions */}
            <Card>
              <CardHeader className="pb-3">
                <div className="flex items-center justify-between">
                  <CardTitle className="text-lg">Active Alerts</CardTitle>
                  <div className="flex items-center gap-2">
                    <Button variant="outline" size="sm" className="gap-2">
                      <CheckCircle className="h-4 w-4" />
                      Bulk Acknowledge
                    </Button>
                    <Button variant="outline" size="sm" className="gap-2">
                      <UserCheck className="h-4 w-4" />
                      Bulk Assign
                    </Button>
                    <Button variant="outline" size="sm" className="gap-2">
                      <X className="h-4 w-4" />
                      Bulk Close
                    </Button>
                  </div>
                </div>
              </CardHeader>
              
              <CardContent>
                <div className="space-y-1">
                  {/* Table Header */}
                  <div className="grid grid-cols-12 gap-4 py-3 border-b font-medium text-sm text-muted-foreground">
                    <div className="col-span-1">
                      <Checkbox />
                    </div>
                    <div className="col-span-1">Time</div>
                    <div className="col-span-2">Type</div>
                    <div className="col-span-2">Tourist</div>
                    <div className="col-span-3">Zone/Reason</div>
                    <div className="col-span-1">Status</div>
                    <div className="col-span-1">SLA</div>
                    <div className="col-span-1">Actions</div>
                  </div>

                  {/* Table Rows */}
                  {alerts.map((alert, index) => (
                    <div 
                      key={alert.id}
                      className="grid grid-cols-12 gap-4 py-3 border-b hover:bg-background/50 cursor-pointer transition-colors"
                    >
                      <div className="col-span-1 flex items-center">
                        <Checkbox />
                      </div>
                      
                      <div className="col-span-1 flex items-center">
                        <span className="text-sm font-mono">{alert.time}</span>
                      </div>
                      
                      <div className="col-span-2 flex items-center gap-2">
                        <Badge 
                          variant={alert.priority === "Critical" ? "destructive" : 
                                  alert.priority === "High" ? "default" : "secondary"}
                          className="text-xs"
                        >
                          {alert.priority}
                        </Badge>
                        <span className="text-sm font-medium">{alert.type}</span>
                      </div>
                      
                      <div className="col-span-2 flex items-center">
                        <div>
                          <p className="text-sm font-medium">{alert.tourist}</p>
                          <p className="text-xs text-muted-foreground">{alert.touristId}</p>
                        </div>
                      </div>
                      
                      <div className="col-span-3 flex items-center">
                        <span className="text-sm">{alert.zone}</span>
                      </div>
                      
                      <div className="col-span-1 flex items-center">
                        <Badge 
                          variant={alert.status === "Open" ? "destructive" : 
                                  alert.status === "Acknowledged" ? "default" : "secondary"}
                          className="text-xs"
                        >
                          {alert.status}
                        </Badge>
                      </div>
                      
                      <div className="col-span-1 flex items-center">
                        <span className={`text-xs font-medium ${
                          alert.sla.includes("Overdue") ? "text-alert-critical" : 
                          alert.sla.includes("2m") ? "text-alert-warning" : "text-status-active"
                        }`}>
                          {alert.sla}
                        </span>
                      </div>
                      
                      <div className="col-span-1 flex items-center">
                        <Button variant="ghost" size="sm">
                          <Eye className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Alert Detail Drawer */}
        <div className="w-96 bg-card border-l border-border p-6 overflow-y-auto">
          <div className="space-y-6">
            {/* Alert Header */}
            <div>
              <h3 className="text-lg font-semibold mb-4">Alert Details</h3>
              
              <Card>
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div>
                      <CardTitle className="text-base flex items-center gap-2">
                        <AlertTriangle className="h-4 w-4 text-alert-critical" />
                        {selectedAlert.type}
                      </CardTitle>
                      <p className="text-sm text-muted-foreground">{selectedAlert.id}</p>
                    </div>
                    <Badge variant="destructive">
                      {selectedAlert.priority}
                    </Badge>
                  </div>
                </CardHeader>
                
                <CardContent className="space-y-4">
                  <div className="space-y-3">
                    <div className="flex items-center gap-3 text-sm">
                      <Clock className="h-4 w-4 text-muted-foreground" />
                      <div>
                        <p className="font-medium">Triggered at {selectedAlert.time}</p>
                        <p className="text-muted-foreground">SLA: {selectedAlert.sla}</p>
                      </div>
                    </div>
                    
                    <div className="flex items-center gap-3 text-sm">
                      <Users className="h-4 w-4 text-muted-foreground" />
                      <div>
                        <p className="font-medium">{selectedAlert.tourist}</p>
                        <p className="text-muted-foreground">{selectedAlert.touristId}</p>
                      </div>
                    </div>
                    
                    <div className="flex items-center gap-3 text-sm">
                      <MapPin className="h-4 w-4 text-muted-foreground" />
                      <p>{selectedAlert.zone}</p>
                    </div>
                  </div>

                  {/* Map Snapshot Placeholder */}
                  <div className="p-4 bg-background/50 rounded border-2 border-dashed">
                    <div className="text-center space-y-2">
                      <MapPin className="h-8 w-8 text-muted-foreground mx-auto" />
                      <p className="text-sm text-muted-foreground">Map snapshot will appear here</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Timeline */}
            <div>
              <h4 className="font-semibold mb-3">Alert Timeline</h4>
              
              <div className="space-y-3">
                {[
                  { time: "14:32", event: "Alert triggered - Geofence breach detected", type: "alert" },
                  { time: "14:33", event: "Auto-notification sent to local police", type: "info" },
                  { time: "14:34", event: "Tourist contact attempted", type: "action" },
                ].map((event, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <div className={`w-2 h-2 rounded-full mt-2 ${
                      event.type === "alert" ? "bg-alert-critical" :
                      event.type === "action" ? "bg-alert-warning" :
                      "bg-alert-info"
                    }`}></div>
                    <div className="flex-1">
                      <p className="text-sm font-medium">{event.event}</p>
                      <p className="text-xs text-muted-foreground">{event.time}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Actions */}
            <div className="space-y-3 pt-4 border-t">
              <Button className="w-full gap-2" asChild>
                <Link to="/efir">
                  <FileText className="h-4 w-4" />
                  Draft E-FIR
                </Link>
              </Button>
              
              <Button variant="outline" className="w-full gap-2" asChild>
                <Link to={`/tourists/${selectedAlert.touristId}`}>
                  <Users className="h-4 w-4" />
                  Open Tourist Profile
                </Link>
              </Button>
              
              <div className="grid grid-cols-2 gap-2">
                <Button variant="outline" size="sm">
                  Acknowledge
                </Button>
                <Button variant="outline" size="sm">
                  Assign
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Alerts;