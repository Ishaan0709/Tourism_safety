import Layout from "@/components/Layout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Textarea } from "@/components/ui/textarea";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { 
  FileText, 
  Save, 
  Send, 
  Download, 
  Clock, 
  Users,
  MapPin,
  ArrowLeft
} from "lucide-react";
import { Link } from "react-router-dom";

const EFirDrafts = () => {
  const drafts = [
    {
      id: "EFIR-D-001",
      touristName: "Ramesh Kumar",
      touristId: "TID-2023-001847",
      incidentType: "Geofence Breach",
      location: "Restricted Area - Zone A",
      createdAt: "2024-01-15 14:35",
      status: "Draft"
    },
    {
      id: "EFIR-D-002", 
      touristName: "John Miller",
      touristId: "TID-2023-001723",
      incidentType: "Panic Button Alert",
      location: "Market Street",
      createdAt: "2024-01-15 14:20",
      status: "Draft"
    }
  ];

  const submitted = [
    {
      id: "EFIR-S-001",
      touristName: "Sarah Wilson",
      touristId: "TID-2023-001634", 
      incidentType: "Signal Drop",
      location: "Hotel District",
      submittedAt: "2024-01-15 13:45",
      status: "Submitted",
      firNumber: "FIR/2024/001234"
    }
  ];

  const currentDraft = drafts[0];

  return (
    <Layout>
      <div className="h-[calc(100vh-4rem)] flex">
        {/* E-FIR List */}
        <div className="w-96 bg-card border-r border-border p-6 overflow-y-auto">
          <div className="space-y-4">
            {/* Header */}
            <div>
              <h1 className="text-xl font-bold">E-FIR Management</h1>
              <p className="text-sm text-muted-foreground">Electronic First Information Reports</p>
            </div>

            {/* Tabs */}
            <Tabs defaultValue="drafts" className="w-full">
              <TabsList className="grid w-full grid-cols-2">
                <TabsTrigger value="drafts" className="gap-2">
                  <FileText className="h-4 w-4" />
                  Drafts ({drafts.length})
                </TabsTrigger>
                <TabsTrigger value="submitted" className="gap-2">
                  <Send className="h-4 w-4" />
                  Submitted ({submitted.length})
                </TabsTrigger>
              </TabsList>

              <TabsContent value="drafts" className="space-y-3 mt-4">
                {drafts.map((draft) => (
                  <Card key={draft.id} className="cursor-pointer hover:shadow-md transition-shadow">
                    <CardContent className="p-4">
                      <div className="space-y-2">
                        <div className="flex items-center justify-between">
                          <h3 className="font-medium text-sm">{draft.id}</h3>
                          <Badge variant="secondary">{draft.status}</Badge>
                        </div>
                        
                        <div className="space-y-1 text-xs text-muted-foreground">
                          <div className="flex items-center gap-1">
                            <Users className="h-3 w-3" />
                            <span>{draft.touristName}</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <FileText className="h-3 w-3" />
                            <span>{draft.incidentType}</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <MapPin className="h-3 w-3" />
                            <span>{draft.location}</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <Clock className="h-3 w-3" />
                            <span>{draft.createdAt}</span>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </TabsContent>

              <TabsContent value="submitted" className="space-y-3 mt-4">
                {submitted.map((item) => (
                  <Card key={item.id} className="cursor-pointer hover:shadow-md transition-shadow">
                    <CardContent className="p-4">
                      <div className="space-y-2">
                        <div className="flex items-center justify-between">
                          <h3 className="font-medium text-sm">{item.firNumber}</h3>
                          <Badge className="bg-status-active">{item.status}</Badge>
                        </div>
                        
                        <div className="space-y-1 text-xs text-muted-foreground">
                          <div className="flex items-center gap-1">
                            <Users className="h-3 w-3" />
                            <span>{item.touristName}</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <FileText className="h-3 w-3" />
                            <span>{item.incidentType}</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <MapPin className="h-3 w-3" />
                            <span>{item.location}</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <Clock className="h-3 w-3" />
                            <span>{item.submittedAt}</span>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </TabsContent>
            </Tabs>
          </div>
        </div>

        {/* E-FIR Form */}
        <div className="flex-1 p-6 overflow-y-auto">
          <div className="max-w-4xl mx-auto space-y-6">
            {/* Header with Navigation */}
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <Button variant="ghost" size="sm" asChild>
                  <Link to="/alerts" className="gap-2">
                    <ArrowLeft className="h-4 w-4" />
                    Back to Alerts
                  </Link>
                </Button>
                <div className="border-l border-border h-6"></div>
                <div>
                  <h1 className="text-2xl font-bold">E-FIR Draft</h1>
                  <p className="text-muted-foreground">{currentDraft.id}</p>
                </div>
              </div>
              
              <div className="flex items-center gap-2">
                <Button variant="outline" size="sm" className="gap-2">
                  <Save className="h-4 w-4" />
                  Save Draft
                </Button>
                <Button variant="outline" size="sm" className="gap-2">
                  <Download className="h-4 w-4" />
                  Export PDF
                </Button>
                <Button size="sm" className="gap-2">
                  <Send className="h-4 w-4" />
                  Submit FIR
                </Button>
              </div>
            </div>

            {/* E-FIR Form */}
            <Card>
              <CardHeader>
                <CardTitle>Electronic First Information Report</CardTitle>
              </CardHeader>
              
              <CardContent className="space-y-6">
                {/* Tourist Information */}
                <div className="space-y-4">
                  <h3 className="text-lg font-semibold border-b pb-2">Tourist Information</h3>
                  
                  <div className="grid gap-4 md:grid-cols-2">
                    <div className="space-y-2">
                      <Label htmlFor="touristName">Tourist Name</Label>
                      <Input 
                        id="touristName" 
                        defaultValue={currentDraft.touristName}
                        readOnly
                        className="bg-muted"
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="touristId">Tourist ID</Label>
                      <Input 
                        id="touristId" 
                        defaultValue={currentDraft.touristId}
                        readOnly
                        className="bg-muted"
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="phone">Phone Number</Label>
                      <Input 
                        id="phone" 
                        defaultValue="+91 98765 43210"
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="emergency">Emergency Contact</Label>
                      <Input 
                        id="emergency" 
                        defaultValue="Rajesh Kumar (+91 98765 43211)"
                      />
                    </div>
                  </div>
                </div>

                {/* Incident Details */}
                <div className="space-y-4">
                  <h3 className="text-lg font-semibold border-b pb-2">Incident Details</h3>
                  
                  <div className="grid gap-4 md:grid-cols-2">
                    <div className="space-y-2">
                      <Label htmlFor="incidentType">Incident Type</Label>
                      <Input 
                        id="incidentType" 
                        defaultValue={currentDraft.incidentType}
                        readOnly
                        className="bg-muted"
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="dateTime">Date & Time</Label>
                      <Input 
                        id="dateTime" 
                        defaultValue="2024-01-15 14:32"
                        readOnly
                        className="bg-muted"
                      />
                    </div>
                    
                    <div className="space-y-2 md:col-span-2">
                      <Label htmlFor="location">Last Known Location</Label>
                      <Input 
                        id="location" 
                        defaultValue={currentDraft.location}
                        readOnly
                        className="bg-muted"
                      />
                    </div>
                    
                    <div className="space-y-2 md:col-span-2">
                      <Label htmlFor="coordinates">GPS Coordinates</Label>
                      <Input 
                        id="coordinates" 
                        defaultValue="15.2993° N, 74.1240° E"
                        readOnly
                        className="bg-muted"
                      />
                    </div>
                  </div>
                </div>

                {/* Incident Narrative */}
                <div className="space-y-4">
                  <h3 className="text-lg font-semibold border-b pb-2">Incident Narrative</h3>
                  
                  <div className="space-y-2">
                    <Label htmlFor="narrative">Detailed Description</Label>
                    <Textarea 
                      id="narrative"
                      rows={8}
                      placeholder="Provide detailed description of the incident, actions taken, and current status..."
                      defaultValue="Tourist Ramesh Kumar (TID-2023-001847) triggered a geofence breach alert at 14:32 hours on 2024-01-15. The system detected the tourist entering a restricted area (Zone A) which is marked as off-limits for tourists due to safety concerns.

Immediate actions taken:
1. Automatic alert generated and sent to monitoring station
2. Tourist's emergency contact notified via SMS
3. Local police station alerted about the breach
4. Attempt made to contact tourist directly

Current status: Tourist has not responded to contact attempts. Location tracking shows tourist is still within the restricted zone. Recommend immediate dispatch of local authorities to the location."
                    />
                  </div>
                </div>

                {/* Officer Information */}
                <div className="space-y-4">
                  <h3 className="text-lg font-semibold border-b pb-2">Reporting Officer Details</h3>
                  
                  <div className="grid gap-4 md:grid-cols-2">
                    <div className="space-y-2">
                      <Label htmlFor="officerName">Officer Name</Label>
                      <Input 
                        id="officerName" 
                        defaultValue="Inspector Suresh Patil"
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="badgeNumber">Badge Number</Label>
                      <Input 
                        id="badgeNumber" 
                        defaultValue="TPS-2024-157"
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="station">Police Station</Label>
                      <Input 
                        id="station" 
                        defaultValue="Tourist Police Station, Goa"
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="reportDate">Report Date</Label>
                      <Input 
                        id="reportDate" 
                        defaultValue="2024-01-15"
                        type="date"
                      />
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Action Buttons */}
            <div className="flex items-center justify-between pt-4 border-t">
              <Button variant="outline" asChild>
                <Link to={`/tourists/${currentDraft.touristId}`} className="gap-2">
                  <Users className="h-4 w-4" />
                  Open Tourist Profile
                </Link>
              </Button>
              
              <div className="flex items-center gap-3">
                <Button variant="outline" className="gap-2">
                  <Save className="h-4 w-4" />
                  Save Draft
                </Button>
                <Button className="gap-2">
                  <Send className="h-4 w-4" />
                  Submit to Police Station
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default EFirDrafts;