import { Link } from "react-router-dom";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  Shield, 
  LogIn, 
  Home, 
  MapPin, 
  AlertTriangle, 
  FileText, 
  Users, 
  Settings,
  ArrowRight
} from "lucide-react";

const Index = () => {
  const pages = [
    {
      title: "Login",
      path: "/login", 
      description: "Email/ID + OTP authentication system",
      icon: LogIn,
      color: "bg-primary",
      features: ["OTP Verification", "Secure Authentication", "Government Portal"]
    },
    {
      title: "Dashboard", 
      path: "/dashboard",
      description: "Command center with KPIs and live alerts",
      icon: Home,
      color: "bg-alert-info",
      features: ["Active Tourist Count", "Live Alert Strip", "Quick Actions", "Mini Map Overview"]
    },
    {
      title: "Live Map",
      path: "/map", 
      description: "Full-screen tourist tracking with real-time data",
      icon: MapPin,
      color: "bg-status-active",
      features: ["Tourist Pins", "Geofence Overlay", "Movement Trails", "Filter Controls"]
    },
    {
      title: "Alert Management",
      path: "/alerts",
      description: "Monitor and respond to safety incidents", 
      icon: AlertTriangle,
      color: "bg-alert-warning",
      features: ["Alert Timeline", "Bulk Actions", "SLA Tracking", "Detail Drawers"]
    },
    {
      title: "E-FIR Drafts",
      path: "/efir",
      description: "Electronic First Information Report system",
      icon: FileText, 
      color: "bg-alert-critical",
      features: ["Pre-filled Forms", "Tourist Data", "Incident Reports", "PDF Export"]
    },
    {
      title: "Tourist Profile",
      path: "/tourists/TID-2023-001847",
      description: "Comprehensive individual tourist information",
      icon: Users,
      color: "bg-secondary",
      features: ["Activity Timeline", "ID Verification", "Contact Details", "Location History"]
    },
    {
      title: "Geofence Management", 
      path: "/fences",
      description: "Define and monitor geographic boundaries",
      icon: Shield,
      color: "bg-alert-info",
      features: ["Zone Creation", "Risk Levels", "Active Hours", "Map Editor"]
    },
    {
      title: "Anomaly Settings",
      path: "/anomaly", 
      description: "Configure detection thresholds and rules", 
      icon: Settings,
      color: "bg-muted",
      features: ["Threshold Config", "Auto-Escalation", "Alert Simulation", "System Status"]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary/10 via-background to-secondary/20">
      {/* Header */}
      <div className="container mx-auto p-6">
        <div className="text-center mb-8 space-y-3">
          <div className="mx-auto w-16 h-16 bg-primary rounded-full flex items-center justify-center mb-4">
            <Shield className="h-8 w-8 text-primary-foreground" />
          </div>
          <h1 className="text-4xl font-bold text-primary">Tourist Safety Monitoring System</h1>
          <p className="text-xl text-muted-foreground">Government Emergency Response & Monitoring Platform</p>
          <Badge className="bg-status-active text-sm">8 Complete Pages • Production Ready</Badge>
        </div>

        {/* Pages Grid */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 max-w-7xl mx-auto">
          {pages.map((page, index) => {
            const Icon = page.icon;
            return (
              <Card key={index} className="group hover:shadow-lg transition-all duration-300 border-0 bg-card/95 backdrop-blur">
                <CardHeader className="space-y-3">
                  <div className="flex items-center justify-between">
                    <div className={`w-12 h-12 ${page.color} rounded-lg flex items-center justify-center`}>
                      <Icon className="h-6 w-6 text-white" />
                    </div>
                    <Badge variant="outline" className="text-xs">
                      Page {index + 1}
                    </Badge>
                  </div>
                  
                  <div>
                    <CardTitle className="text-lg group-hover:text-primary transition-colors">
                      {page.title}
                    </CardTitle>
                    <CardDescription className="text-sm mt-1">
                      {page.description}
                    </CardDescription>
                  </div>
                </CardHeader>
                
                <CardContent className="space-y-4">
                  {/* Features */}
                  <div className="space-y-2">
                    <h4 className="text-sm font-semibold text-muted-foreground">Key Features:</h4>
                    <div className="grid grid-cols-1 gap-1">
                      {page.features.map((feature, idx) => (
                        <div key={idx} className="flex items-center gap-2 text-xs">
                          <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                          <span>{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  {/* Visit Button */}
                  <Button asChild className="w-full gap-2 group-hover:gap-3 transition-all">
                    <Link to={page.path}>
                      Visit Page
                      <ArrowRight className="h-4 w-4" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* System Overview */}
        <div className="mt-12 max-w-4xl mx-auto">
          <Card className="border-0 bg-card/95 backdrop-blur">
            <CardHeader className="text-center">
              <CardTitle className="text-2xl">Complete System Architecture</CardTitle>
              <CardDescription className="text-base">
                Professional-grade tourist safety monitoring with government-level security standards
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid gap-6 md:grid-cols-3">
                <div className="text-center space-y-2">
                  <div className="w-12 h-12 bg-status-active rounded-full flex items-center justify-center mx-auto">
                    <Shield className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="font-semibold">Security First</h3>
                  <p className="text-sm text-muted-foreground">
                    OTP authentication, encrypted data, audit trails, and role-based access control
                  </p>
                </div>
                
                <div className="text-center space-y-2">
                  <div className="w-12 h-12 bg-alert-info rounded-full flex items-center justify-center mx-auto">
                    <MapPin className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="font-semibold">Real-Time Tracking</h3>
                  <p className="text-sm text-muted-foreground">
                    Live GPS tracking, geofence monitoring, anomaly detection, and instant alerts
                  </p>
                </div>
                
                <div className="text-center space-y-2">
                  <div className="w-12 h-12 bg-alert-warning rounded-full flex items-center justify-center mx-auto">
                    <FileText className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="font-semibold">Emergency Response</h3>
                  <p className="text-sm text-muted-foreground">
                    Automated E-FIR generation, escalation workflows, and multi-agency coordination
                  </p>
                </div>
              </div>
              
              <div className="mt-8 p-4 bg-background/50 rounded-lg border-2 border-dashed">
                <p className="text-center text-sm text-muted-foreground">
                  <strong>Note:</strong> For full functionality including live maps and real-time data, 
                  connect to Supabase backend and configure Mapbox integration via the green Supabase button in the top-right corner.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Index;
