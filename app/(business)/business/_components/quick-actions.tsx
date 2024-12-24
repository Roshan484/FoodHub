import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { PlusCircle, FileText, MessageSquare, Settings } from "lucide-react";

export default function QuickActions() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Quick Actions</CardTitle>
      </CardHeader>
      <CardContent className="grid gap-4">
        <Button className="w-full justify-start">
          <PlusCircle className="mr-2 h-4 w-4" />
          Create New Promotion
        </Button>
        <Button className="w-full justify-start" variant="outline">
          <FileText className="mr-2 h-4 w-4" />
          View Reports
        </Button>
        <Button className="w-full justify-start" variant="outline">
          <MessageSquare className="mr-2 h-4 w-4" />
          Customer Feedback
        </Button>
        <Button className="w-full justify-start" variant="outline">
          <Settings className="mr-2 h-4 w-4" />
          Restaurant Settings
        </Button>
      </CardContent>
    </Card>
  );
}
