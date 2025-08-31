import Layout from "@/components/Layout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Switch } from "@/components/ui/switch";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { 
  Settings, 
  AlertTriangle, 
  Clock, 
  MapPin, 
  Signal, 
  Users, 
  Play,
  Save,
  RotateCcw,
  TrendingUp
} from "lucide-react";
import { Link } from "react-router-dom";

const AnomalySettings = () => {
  const currentSettings = {
    inactivityThreshold: 30,
    deviationRadius: 500,
    signalDropTimeout: 15,
    autoEscalationEnabled: true,
    autoEscalationTime: 60,
    workingHoursStart: "06:00",
    workingHoursEnd: "22:00"
  };

  const simulationTourists = [
    { id: "TID-2023-001847", name: "Ramesh Kumar", status: "Active", location: "Beach Road" },
    { id: "TID-2023-001856", name: "Priya Sharma", status: "Active", location: "Market Street" },
    { id: "TID-2023-001723", name: "John Miller", status: "Active", location: "Hotel District" }
  ];

  return (
    <Layout>
      <div className="container mx-auto p-6 space-y-6">
        {/* Header */}
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold">Anomaly Detection Settings</h1>
            <p className="text-muted-foreground">Configure alert thresholds and system behavior</p>
          </div>
          
          <div className="flex items-center gap-2">
            <Button variant="outline" size="sm" className="gap-2">
              <RotateCcw className="h-4 w-4" />
              Reset to Defaults
            </Button>
            <Button size="sm" className="gap-2">
              <Save className="h-4 w-4" />
              Save Configuration
            </Button>
          </div>
        </div>

        <div className="grid gap-6 lg:grid-cols-3">
          {/* Main Settings */}
          <div className="lg:col-span-2 space-y-6">
            {/* Alert Thresholds */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <AlertTriangle className="h-5 w-5" />
                  Alert Thresholds
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                {/* Inactivity Settings */}
                <div className="space-y-4">
                  <div className="flex items-center gap-2">
                    <Clock className="h-4 w-4 text-muted-foreground" />
                    <h3 className="font-semibold">Inactivity Detection</h3>
                  </div>
                  
                  <div className="grid gap-4 md:grid-cols-2">
                    <div className="space-y-2">
                      <Label htmlFor="inactivity">Inactivity Threshold (minutes)</Label>
                      <Input 
                        id="inactivity"
                        type="number"
                        defaultValue={currentSettings.inactivityThreshold}
                        min="5"
                        max="180"
                      />
                      <p className="text-xs text-muted-foreground">
                        Alert when tourist shows no movement for this duration
                      </p>
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="inactivity-hours">Active During</Label>
                      <Select defaultValue="working">
                        <SelectTrigger>
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="always">24/7</SelectItem>
                          <SelectItem value="working">Working Hours Only</SelectItem>
                          <SelectItem value="night">Night Hours Only</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                </div>

                <Separator />

                {/* Deviation Settings */}
                <div className="space-y-4">
                  <div className="flex items-center gap-2">
                    <MapPin className="h-4 w-4 text-muted-foreground" />
                    <h3 className="font-semibold">Route Deviation</h3>
                  </div>
                  
                  <div className="grid gap-4 md:grid-cols-2">
                    <div className="space-y-2">
                      <Label htmlFor="deviation">Deviation Radius (meters)</Label>
                      <Input 
                        id="deviation"
                        type="number"
                        defaultValue={currentSettings.deviationRadius}
                        min="100"
                        max="2000"
                      />
                      <p className="text-xs text-muted-foreground">
                        Alert when tourist moves beyond expected route by this distance
                      </p>
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="deviation-sensitivity">Sensitivity Level</Label>
                      <Select defaultValue="medium">
                        <SelectTrigger>
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="low">Low - Major deviations only</SelectItem>
                          <SelectItem value="medium">Medium - Balanced detection</SelectItem>
                          <SelectItem value="high">High - Detect minor deviations</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                </div>

                <Separator />

                {/* Signal Drop Settings */}
                <div className="space-y-4">
                  <div className="flex items-center gap-2">
                    <Signal className="h-4 w-4 text-muted-foreground" />
                    <h3 className="font-semibold">Signal Drop Detection</h3>
                  </div>
                  
                  <div className="grid gap-4 md:grid-cols-2">
                    <div className="space-y-2">
                      <Label htmlFor="signal">Signal Drop Timeout (minutes)</Label>
                      <Input 
                        id="signal"
                        type="number"
                        defaultValue={currentSettings.signalDropTimeout}
                        min="5"
                        max="60"
                      />
                      <p className="text-xs text-muted-foreground">
                        Alert when GPS signal is lost for this duration
                      </p>
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="signal-priority">Alert Priority</Label>
                      <Select defaultValue="medium">
                        <SelectTrigger>
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="low">Low Priority</SelectItem>
                          <SelectItem value="medium">Medium Priority</SelectItem>
                          <SelectItem value="high">High Priority</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Escalation Settings */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <TrendingUp className="h-5 w-5" />
                  Auto-Escalation Rules
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="flex items-center justify-between">
                  <div className="space-y-1">
                    <h3 className="font-semibold">Enable Auto-Escalation</h3>
                    <p className="text-sm text-muted-foreground">
                      Automatically escalate unacknowledged alerts to higher authorities
                    </p>
                  </div>
                  <Switch defaultChecked={currentSettings.autoEscalationEnabled} />
                </div>

                <div className="grid gap-4 md:grid-cols-2">
                  <div className="space-y-2">
                    <Label htmlFor="escalation">Escalation Time (minutes)</Label>
                    <Input 
                      id="escalation"
                      type="number"
                      defaultValue={currentSettings.autoEscalationTime}
                      min="15"
                      max="240"
                    />
                    <p className="text-xs text-muted-foreground">
                      Time before unacknowledged alerts are escalated
                    </p>
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="escalation-to">Escalate To</Label>
                    <Select defaultValue="supervisor">
                      <SelectTrigger>
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="supervisor">Duty Supervisor</SelectItem>
                        <SelectItem value="police">Local Police Station</SelectItem>
                        <SelectItem value="emergency">Emergency Services</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Working Hours */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Clock className="h-5 w-5" />
                  Operational Hours
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid gap-4 md:grid-cols-2">
                  <div className="space-y-2">
                    <Label htmlFor="start-time">Working Hours Start</Label>
                    <Input 
                      id="start-time"
                      type="time"
                      defaultValue={currentSettings.workingHoursStart}
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="end-time">Working Hours End</Label>
                    <Input 
                      id="end-time"
                      type="time"
                      defaultValue={currentSettings.workingHoursEnd}
                    />
                  </div>
                </div>
                
                <p className="text-sm text-muted-foreground">
                  Some alert types may have reduced sensitivity or different escalation rules outside working hours.
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Alert Simulation */}
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Play className="h-5 w-5" />
                  Alert Simulation
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-3">
                  <div>
                    <Label htmlFor="sim-tourist">Select Tourist</Label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Choose tourist..." />
                      </SelectTrigger>
                      <SelectContent>
                        {simulationTourists.map((tourist) => (
                          <SelectItem key={tourist.id} value={tourist.id}>
                            <div className="flex items-center gap-2">
                              <Users className="h-3 w-3" />
                              <span className="font-medium">{tourist.name}</span>
                              <Badge variant="outline" className="text-xs">
                                {tourist.status}
                              </Badge>
                            </div>
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <Label>Simulation Type</Label>
                    <div className="space-y-2 mt-2">
                      <Button variant="outline" size="sm" className="w-full justify-start gap-2">
                        <Clock className="h-4 w-4" />
                        Simulate Inactivity Alert
                      </Button>
                      <Button variant="outline" size="sm" className="w-full justify-start gap-2">
                        <MapPin className="h-4 w-4" />
                        Simulate Route Deviation
                      </Button>
                      <Button variant="outline" size="sm" className="w-full justify-start gap-2">
                        <Signal className="h-4 w-4" />
                        Simulate Signal Drop
                      </Button>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* System Status */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">System Status</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-sm">Anomaly Detection</span>
                  <Badge className="bg-status-active">Active</Badge>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm">Auto-Escalation</span>
                  <Badge className="bg-status-active">Enabled</Badge>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm">Alert Processing</span>
                  <Badge className="bg-status-active">Online</Badge>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm">Last Update</span>
                  <span className="text-xs text-muted-foreground">2 mins ago</span>
                </div>
              </CardContent>
            </Card>

            {/* Quick Actions */}
            <div className="space-y-3">
              <Button className="w-full gap-2" asChild>
                <Link to="/alerts">
                  <AlertTriangle className="h-4 w-4" />
                  View All Alerts
                </Link>
              </Button>
              
              <Button variant="outline" className="w-full gap-2" asChild>
                <Link to="/dashboard">
                  <Settings className="h-4 w-4" />
                  Back to Dashboard
                </Link>
              </Button>
            </div>
          </div>
        </div>

        {/* Save Configuration */}
        <div className="flex items-center justify-center pt-6 border-t">
          <div className="flex items-center gap-3">
            <Button variant="outline">Cancel Changes</Button>
            <Button className="gap-2">
              <Save className="h-4 w-4" />
              Save & Publish Configuration
            </Button>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default AnomalySettings;