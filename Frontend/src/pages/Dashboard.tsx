import Layout from "@/components/Layout";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  Users, 
  AlertTriangle, 
  Shield, 
  Clock, 
  MapPin, 
  FileText, 
  Settings,
  Eye,
  TrendingUp,
  Activity
} from "lucide-react";
import { Link } from "react-router-dom";

const Dashboard = () => {
  const kpiData = [
    {
      title: "Active Tourists",
      value: "2,847",
      change: "+12%",
      icon: Users,
      color: "text-status-active"
    },
    {
      title: "Open Alerts", 
      value: "23",
      change: "-8%",
      icon: AlertTriangle,
      color: "text-alert-warning"
    },
    {
      title: "Breaches Today",
      value: "7",
      change: "+2",
      icon: Shield,
      color: "text-alert-critical"
    },
    {
      title: "Avg Response Time",
      value: "4.2m",
      change: "-15s",
      icon: Clock,
      color: "text-alert-info"
    }
  ];

  const liveAlerts = [
    {
      id: "ALT-001",
      type: "Geofence Breach",
      tourist: "Ramesh Kumar",
      zone: "Restricted Area - Zone A",
      time: "2 mins ago",
      priority: "high"
    },
    {
      id: "ALT-002", 
      type: "Inactivity Alert",
      tourist: "Priya Sharma",
      zone: "Last seen: Beach Road",
      time: "8 mins ago",
      priority: "medium"
    },
    {
      id: "ALT-003",
      type: "Panic Button",
      tourist: "John Miller",
      zone: "Market Street",
      time: "15 mins ago", 
      priority: "critical"
    }
  ];

  const quickActions = [
    {
      title: "Open Live Map",
      description: "View real-time tourist locations",
      icon: MapPin,
      link: "/map",
      color: "bg-primary hover:bg-primary-hover"
    },
    {
      title: "Create Geofence",
      description: "Define new restricted areas",
      icon: Shield,
      link: "/fences",
      color: "bg-alert-info hover:bg-alert-info/90"
    },
    {
      title: "Anomaly Settings",
      description: "Configure alert thresholds",
      icon: Settings,
      link: "/anomaly",
      color: "bg-alert-warning hover:bg-alert-warning/90"
    },
    {
      title: "E-FIR Drafts",
      description: "Manage incident reports",
      icon: FileText,
      link: "/efir",
      color: "bg-status-active hover:bg-status-active/90"
    }
  ];

  return (
    <Layout>
      <div className="container mx-auto p-6 space-y-6">
        {/* Welcome Header */}
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold text-foreground">Command Dashboard</h1>
            <p className="text-muted-foreground mt-1">Tourist Safety Monitoring System</p>
          </div>
          <div className="flex items-center gap-2">
            <Activity className="h-5 w-5 text-status-active animate-pulse" />
            <span className="text-sm font-medium text-status-active">System Online</span>
          </div>
        </div>

        {/* KPI Cards */}
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {kpiData.map((kpi, index) => {
            const Icon = kpi.icon;
            return (
              <Card key={index} className="border-0 shadow-md bg-card">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-medium text-muted-foreground">{kpi.title}</p>
                      <div className="flex items-baseline gap-2">
                        <p className="text-2xl font-bold">{kpi.value}</p>
                        <span className={`text-xs font-medium flex items-center gap-1 ${
                          kpi.change.startsWith('+') ? 'text-status-active' : 
                          kpi.change.startsWith('-') ? 'text-alert-critical' : 'text-muted-foreground'
                        }`}>
                          <TrendingUp className="h-3 w-3" />
                          {kpi.change}
                        </span>
                      </div>
                    </div>
                    <Icon className={`h-8 w-8 ${kpi.color}`} />
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        <div className="grid gap-6 lg:grid-cols-3">
          {/* Live Alerts Strip */}
          <Card className="lg:col-span-2 border-0 shadow-md">
            <CardHeader className="flex flex-row items-center justify-between">
              <div>
                <CardTitle className="text-lg flex items-center gap-2">
                  <AlertTriangle className="h-5 w-5 text-alert-warning" />
                  Live Alerts
                </CardTitle>
                <CardDescription>Real-time incident monitoring</CardDescription>
              </div>
              <Button variant="outline" size="sm" asChild>
                <Link to="/alerts" className="gap-2">
                  <Eye className="h-4 w-4" />
                  View All
                </Link>
              </Button>
            </CardHeader>
            <CardContent className="space-y-3">
              {liveAlerts.map((alert, index) => (
                <div key={index} className="flex items-center justify-between p-3 rounded-lg border bg-background/50">
                  <div className="flex-1">
                    <div className="flex items-center gap-3">
                      <Badge 
                        variant={alert.priority === "critical" ? "destructive" : 
                                alert.priority === "high" ? "default" : "secondary"}
                        className="text-xs"
                      >
                        {alert.priority.toUpperCase()}
                      </Badge>
                      <span className="font-medium">{alert.type}</span>
                    </div>
                    <p className="text-sm text-muted-foreground mt-1">
                      {alert.tourist} • {alert.zone}
                    </p>
                  </div>
                  <div className="text-right">
                    <p className="text-xs text-muted-foreground">{alert.time}</p>
                    <Button variant="ghost" size="sm" className="mt-1">
                      View
                    </Button>
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>

          {/* Mini Map Placeholder */}
          <Card className="border-0 shadow-md">
            <CardHeader>
              <CardTitle className="text-lg flex items-center gap-2">
                <MapPin className="h-5 w-5 text-primary" />
                Live Map Overview
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="aspect-square bg-gradient-to-br from-primary/20 to-secondary/20 rounded-lg flex items-center justify-center">
                <div className="text-center space-y-2">
                  <MapPin className="h-12 w-12 text-primary mx-auto" />
                  <p className="text-sm text-muted-foreground">2,847 Active Pins</p>
                  <Button size="sm" asChild>
                    <Link to="/map">Open Full Map</Link>
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Quick Actions */}
        <Card className="border-0 shadow-md">
          <CardHeader>
            <CardTitle className="text-lg">Quick Actions</CardTitle>
            <CardDescription>Frequently used system functions</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
              {quickActions.map((action, index) => {
                const Icon = action.icon;
                return (
                  <Button
                    key={index}
                    variant="outline"
                    className={`h-auto p-4 flex flex-col items-center gap-3 border-2 hover:border-primary/50 ${action.color} hover:text-white`}
                    asChild
                  >
                    <Link to={action.link}>
                      <Icon className="h-8 w-8" />
                      <div className="text-center">
                        <p className="font-medium">{action.title}</p>
                        <p className="text-xs opacity-90">{action.description}</p>
                      </div>
                    </Link>
                  </Button>
                );
              })}
            </div>
          </CardContent>
        </Card>
      </div>
    </Layout>
  );
};

export default Dashboard;