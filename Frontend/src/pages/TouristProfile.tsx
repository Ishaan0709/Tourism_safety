import { useParams, Link } from "react-router-dom";
import Layout from "@/components/Layout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  Users, 
  Phone, 
  MapPin, 
  Clock, 
  AlertTriangle, 
  FileText,
  ArrowLeft,
  MessageSquare,
  Shield,
  Activity,
  Hash,
  Contact
} from "lucide-react";

const TouristProfile = () => {
  const { tid } = useParams();

  const tourist = {
    name: "Ramesh Kumar",
    tid: "TID-2023-001847",
    phone: "+91 98765 43210", 
    email: "ramesh.kumar@email.com",
    emergencyContact: "Rajesh Kumar (+91 98765 43211)",
    tripValidity: "2024-01-10 to 2024-01-20",
    status: "Active",
    lastSeen: "2 minutes ago",
    currentLocation: "Beach Road, Zone A",
    nationality: "Indian",
    age: 34,
    gender: "Male"
  };

  const timeline = [
    {
      time: "14:32",
      event: "Geofence breach - Entered restricted Zone A",
      type: "alert",
      location: "Restricted Area - Zone A"
    },
    {
      time: "14:15", 
      event: "Location updated via GPS",
      type: "info",
      location: "Beach Road"
    },
    {
      time: "13:45",
      event: "Checked in at beachside restaurant",
      type: "checkin", 
      location: "Sunset Cafe"
    },
    {
      time: "12:30",
      event: "Entered tourist zone",
      type: "info",
      location: "Main Tourist Area"
    },
    {
      time: "11:15",
      event: "Hotel checkout completed",
      type: "checkin",
      location: "Resort Paradise"
    }
  ];

  const contacts = [
    {
      type: "Primary",
      name: "Ramesh Kumar",
      phone: "+91 98765 43210",
      relation: "Self"
    },
    {
      type: "Emergency",
      name: "Rajesh Kumar", 
      phone: "+91 98765 43211",
      relation: "Brother"
    },
    {
      type: "Local Guide",
      name: "Tourist Help Desk",
      phone: "+91 98765 43299",
      relation: "Official"
    }
  ];

  return (
    <Layout>
      <div className="container mx-auto p-6 space-y-6">
        {/* Header */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Button variant="ghost" size="sm" asChild>
              <Link to="/map" className="gap-2">
                <ArrowLeft className="h-4 w-4" />
                Back to Map
              </Link>
            </Button>
            <div className="border-l border-border h-6"></div>
            <div>
              <h1 className="text-2xl font-bold">{tourist.name}</h1>
              <p className="text-muted-foreground">{tourist.tid}</p>
            </div>
          </div>
          
          <Badge className={`${
            tourist.status === "Active" ? "bg-status-active" :
            tourist.status === "Missing" ? "bg-alert-critical" :
            "bg-status-inactive"
          }`}>
            {tourist.status}
          </Badge>
        </div>

        {/* Tourist Info Header Card */}
        <Card>
          <CardContent className="p-6">
            <div className="grid gap-6 md:grid-cols-3">
              {/* Basic Info */}
              <div className="space-y-4">
                <h3 className="font-semibold text-lg">Basic Information</h3>
                <div className="space-y-2 text-sm">
                  <div className="flex items-center gap-2">
                    <Users className="h-4 w-4 text-muted-foreground" />
                    <span>{tourist.nationality}, {tourist.age} years, {tourist.gender}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Phone className="h-4 w-4 text-muted-foreground" />
                    <span>{tourist.phone}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="h-4 w-4 text-muted-foreground" />
                    <span>Trip: {tourist.tripValidity}</span>
                  </div>
                </div>
              </div>

              {/* Location Info */}
              <div className="space-y-4">
                <h3 className="font-semibold text-lg">Current Status</h3>
                <div className="space-y-2 text-sm">
                  <div className="flex items-center gap-2">
                    <MapPin className="h-4 w-4 text-muted-foreground" />
                    <span>{tourist.currentLocation}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="h-4 w-4 text-muted-foreground" />
                    <span>Last seen: {tourist.lastSeen}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Activity className="h-4 w-4 text-status-active" />
                    <span>GPS Signal: Strong</span>
                  </div>
                </div>
              </div>

              {/* Emergency Contact */}
              <div className="space-y-4">
                <h3 className="font-semibold text-lg">Emergency Contact</h3>
                <div className="space-y-2 text-sm">
                  <div className="flex items-center gap-2">
                    <AlertTriangle className="h-4 w-4 text-muted-foreground" />
                    <span>{tourist.emergencyContact}</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex items-center gap-3 mt-6 pt-6 border-t">
              <Button className="gap-2">
                <Phone className="h-4 w-4" />
                Call Tourist
              </Button>
              <Button variant="outline" className="gap-2">
                <MessageSquare className="h-4 w-4" />
                Send SMS
              </Button>
              <Button variant="outline" className="gap-2">
                <Shield className="h-4 w-4" />
                Mark Missing
              </Button>
              <Button variant="outline" className="gap-2">
                <FileText className="h-4 w-4" />
                Draft E-FIR
              </Button>
              <Button variant="outline" className="gap-2">
                <AlertTriangle className="h-4 w-4" />
                Notify Local PS
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Detailed Tabs */}
        <Tabs defaultValue="timeline" className="space-y-4">
          <TabsList>
            <TabsTrigger value="timeline" className="gap-2">
              <Clock className="h-4 w-4" />
              Timeline
            </TabsTrigger>
            <TabsTrigger value="map" className="gap-2">
              <MapPin className="h-4 w-4" />
              Map Trail
            </TabsTrigger>
            <TabsTrigger value="id" className="gap-2">
              <Hash className="h-4 w-4" />
              ID Verification
            </TabsTrigger>
            <TabsTrigger value="contacts" className="gap-2">
              <Contact className="h-4 w-4" />
              Contacts
            </TabsTrigger>
          </TabsList>

          <TabsContent value="timeline" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>Activity Timeline</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {timeline.map((item, index) => (
                    <div key={index} className="flex items-start gap-4 pb-4 border-b last:border-b-0">
                      <div className={`w-3 h-3 rounded-full mt-2 ${
                        item.type === "alert" ? "bg-alert-critical" :
                        item.type === "checkin" ? "bg-status-active" :
                        "bg-alert-info"
                      }`}></div>
                      
                      <div className="flex-1">
                        <div className="flex items-center justify-between">
                          <p className="font-medium">{item.event}</p>
                          <span className="text-sm text-muted-foreground">{item.time}</span>
                        </div>
                        <p className="text-sm text-muted-foreground mt-1">
                          <MapPin className="h-3 w-3 inline mr-1" />
                          {item.location}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="map" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>Location Trail</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="aspect-video bg-gradient-to-br from-primary/20 to-secondary/20 rounded-lg flex items-center justify-center">
                  <div className="text-center space-y-2">
                    <MapPin className="h-12 w-12 text-primary mx-auto" />
                    <p className="text-lg font-medium">Tourist Movement Trail</p>
                    <p className="text-sm text-muted-foreground">Interactive map showing 24-hour movement history</p>
                    <p className="text-xs text-muted-foreground">Connect to Supabase and add Mapbox integration</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="id" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>Identity Verification</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid gap-4 md:grid-cols-2">
                  <div className="space-y-3">
                    <h4 className="font-semibold">Document Details</h4>
                    <div className="space-y-2 text-sm">
                      <p><span className="font-medium">ID Type:</span> Aadhaar Card</p>
                      <p><span className="font-medium">ID Number:</span> **** **** **47 (Masked)</p>
                      <p><span className="font-medium">Hash:</span> a1b2c3d4e5f6g7h8</p>
                      <p><span className="font-medium">Verified:</span> ✅ Government Database</p>
                    </div>
                  </div>
                  
                  <div className="space-y-3">
                    <h4 className="font-semibold">Verification Status</h4>
                    <div className="space-y-2">
                      <Badge className="bg-status-active">Identity Verified</Badge>
                      <Badge className="bg-status-active">Phone Verified</Badge>
                      <Badge className="bg-alert-info">Biometric: Pending</Badge>
                    </div>
                  </div>
                </div>
                
                <div className="pt-4 border-t">
                  <p className="text-xs text-muted-foreground">
                    Personal information is encrypted and access is logged for audit purposes.
                    Full ID details are only visible to authorized personnel.
                  </p>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="contacts" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>Contact Information</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {contacts.map((contact, index) => (
                    <div key={index} className="flex items-center justify-between p-4 border rounded-lg">
                      <div className="space-y-1">
                        <div className="flex items-center gap-2">
                          <Badge variant="outline">{contact.type}</Badge>
                          <span className="font-medium">{contact.name}</span>
                          <span className="text-sm text-muted-foreground">({contact.relation})</span>
                        </div>
                        <p className="text-sm text-muted-foreground">{contact.phone}</p>
                      </div>
                      
                      <div className="flex items-center gap-2">
                        <Button variant="outline" size="sm">
                          <Phone className="h-4 w-4" />
                        </Button>
                        <Button variant="outline" size="sm">
                          <MessageSquare className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </Layout>
  );
};

export default TouristProfile;