import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const supportIssues = [
  {
    id: 1,
    user: "John Doe",
    issue: "Order not delivered",
    priority: "High",
    status: "Open",
  },
  {
    id: 2,
    user: "Jane Smith",
    issue: "Wrong item received",
    priority: "Medium",
    status: "In Progress",
  },
  {
    id: 3,
    user: "Bob Johnson",
    issue: "Restaurant complaint",
    priority: "Low",
    status: "Closed",
  },
  {
    id: 4,
    user: "Alice Brown",
    issue: "App crash",
    priority: "High",
    status: "Open",
  },
];

export default function SupportIssues() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Support Issues</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {supportIssues.map((issue) => (
            <div key={issue.id} className="flex items-center justify-between">
              <div>
                <p className="font-medium">{issue.user}</p>
                <p className="text-sm text-gray-500">{issue.issue}</p>
              </div>
              <div className="flex items-center space-x-2">
                <Badge
                  variant={
                    issue.priority === "High"
                      ? "destructive"
                      : issue.priority === "Medium"
                        ? "default"
                        : "secondary"
                  }
                >
                  {issue.priority}
                </Badge>
                <Badge
                  variant={
                    issue.status === "Open"
                      ? "outline"
                      : issue.status === "In Progress"
                        ? "default"
                        : "secondary"
                  }
                >
                  {issue.status}
                </Badge>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
