import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';

export default function CMSPage() {
  const contentSections = [
    'Homepage Banner',
    'FAQs',
    'Legal Pages', 
    'Email Templates',
    'App Content'
  ];

  return (
    <div>
      <h1 className="text-2xl font-bold mb-6">Content Management</h1>
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Content Sections */}
        <Card>
          <CardHeader>
            <CardTitle>Content Sections</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-2">
              {contentSections.map((section) => (
                <button
                  key={section}
                  className="w-full text-left px-3 py-2 rounded hover:bg-[--color-neutral-100] transition-colors"
                >
                  {section}
                </button>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Editor */}
        <div className="lg:col-span-2">
          <Card>
            <CardHeader>
              <CardTitle>Edit Content</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <label className="block text-sm font-medium mb-2">Title</label>
                <input
                  type="text"
                  defaultValue="Welcome to Ulox"
                  className="w-full px-3 py-2 border rounded-lg"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium mb-2">Content</label>
                <textarea
                  defaultValue="Your premier destination for real estate..."
                  className="w-full px-3 py-2 border rounded-lg h-40"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium mb-2">Featured Image</label>
                <div className="border-2 border-dashed border-[--color-neutral-300] rounded-lg p-6 text-center">
                  <div className="text-[--color-neutral-600]">Drop image here or click to upload</div>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <label className="flex items-center gap-2">
                  <input type="checkbox" defaultChecked />
                  <span className="text-sm">Published</span>
                </label>
              </div>

              <div className="flex gap-3">
                <Button>Save Draft</Button>
                <Button variant="primary">Publish</Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}