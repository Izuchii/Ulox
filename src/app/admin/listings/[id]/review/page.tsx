import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";

export default function ReviewListingPage({ params }: { params: { id: string } }) {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
      <div>
        <Card>
          <CardHeader>
            <CardTitle>Property Preview</CardTitle>
          </CardHeader>
          <CardContent>
            <img src="https://picsum.photos/400/300" alt="Property" className="w-full rounded-lg mb-4" />
            <h3 className="text-xl font-bold mb-2">Modern Downtown Apartment</h3>
            <p className="text-[--color-neutral-600] mb-4">Beautiful 2-bedroom apartment...</p>
            <div className="grid grid-cols-2 gap-4 text-sm">
              <div>Beds: 2</div>
              <div>Price: $2,500/month</div>
            </div>
          </CardContent>
        </Card>
      </div>
      <div>
        <Card>
          <CardHeader>
            <CardTitle>Review Panel</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div>
              <h4 className="font-medium mb-3">Content Review</h4>
              <div className="space-y-2">
                {["Photos clear", "Details accurate"].map((item) => (
                  <label key={item} className="flex items-center gap-2">
                    <input type="checkbox" />
                    <span className="text-sm">{item}</span>
                  </label>
                ))}
              </div>
            </div>
            <div className="flex gap-3">
              <Button className="flex-1">Approve</Button>
              <Button className="flex-1" variant="danger">Reject</Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
