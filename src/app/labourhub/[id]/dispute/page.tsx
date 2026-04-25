'use client';

import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { Badge } from '@/components/ui/Badge';

export default function DisputePage({ params }: { params: { id: string } }) {
  const [selectedIssue, setSelectedIssue] = useState('');
  const [description, setDescription] = useState('');
  const [priority, setPriority] = useState('medium');
  const [evidenceFiles, setEvidenceFiles] = useState<File[]>([]);

  const issueTypes = [
    { id: 'nonpayment', label: 'Non-payment', description: 'Employer has not paid as agreed', icon: '💰' },
    { id: 'unsafe', label: 'Unsafe conditions', description: 'Workplace safety concerns', icon: '⚠️' },
    { id: 'scope', label: 'Scope creep', description: 'Work requirements changed without agreement', icon: '📋' },
    { id: 'false', label: 'False description', description: 'Job was misrepresented', icon: '🔍' },
    { id: 'other', label: 'Other', description: 'Other work-related dispute', icon: '❓' }
  ];

  const priorityLevels = [
    { id: 'low', label: 'Low', color: 'text-[--color-success]', description: 'Minor issue, no urgency' },
    { id: 'medium', label: 'Medium', color: 'text-[--color-warning]', description: 'Standard processing time' },
    { id: 'high', label: 'High', color: 'text-[--color-error]', description: 'Important, needs attention' },
    { id: 'urgent', label: 'Urgent', color: 'text-red-600', description: 'Critical, immediate attention required' }
  ];

  const handleFileUpload = () => {
    const input = document.createElement('input');
    input.type = 'file';
    input.multiple = true;
    input.accept = 'image/*,.pdf,.doc,.docx';
    input.onchange = (e) => {
      const files = Array.from((e.target as HTMLInputElement).files || []);
      setEvidenceFiles(prev => [...prev, ...files]);
    };
    input.click();
  };

  const removeFile = (index: number) => {
    setEvidenceFiles(prev => prev.filter((_, i) => i !== index));
  };

  const handleSubmit = () => {
    if (!selectedIssue || !description.trim()) {
      alert('Please fill in all required fields');
      return;
    }

    // In real app, would submit to API
    const disputeData = {
      jobId: params.id,
      issueType: selectedIssue,
      description,
      priority,
      evidence: evidenceFiles.map(f => f.name),
      timestamp: new Date().toISOString()
    };

    console.log('Submitting dispute:', disputeData);
    alert('Dispute submitted successfully. You will receive updates via email.');
  };

  return (
    <div className="min-h-screen bg-[--color-neutral-50] py-8">
      <div className="max-w-2xl mx-auto px-4">
        <div className="mb-6">
          <h1 className="text-2xl font-bold text-[--color-neutral-900] mb-2">
            Report a Dispute
          </h1>
          <p className="text-[--color-neutral-600]">
            Submit a formal dispute regarding your work assignment
          </p>
        </div>

        {/* Job Reference */}
        <Card className="mb-6">
          <CardHeader>
            <CardTitle>Job Reference</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="bg-[--color-neutral-50] p-4 rounded-lg">
              <div className="font-medium text-[--color-neutral-900] mb-2">
                Construction Laborer - BuildCorp Inc.
              </div>
              <div className="text-sm text-[--color-neutral-600]">
                Job ID: {params.id} • Manhattan, NYC
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Issue Type Selection */}
        <Card className="mb-6">
          <CardHeader>
            <CardTitle>Issue Type *</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {issueTypes.map((issue) => (
                <label
                  key={issue.id}
                  className={`flex items-start gap-4 p-4 border rounded-lg cursor-pointer transition-colors ${
                    selectedIssue === issue.id
                      ? 'border-[--color-primary] bg-[--color-primary] bg-opacity-5'
                      : 'border-[--color-neutral-200] hover:border-[--color-primary]'
                  }`}
                >
                  <input
                    type="radio"
                    name="issueType"
                    value={issue.id}
                    checked={selectedIssue === issue.id}
                    onChange={(e) => setSelectedIssue(e.target.value)}
                    className="mt-1"
                  />
                  <div className="text-2xl">{issue.icon}</div>
                  <div className="flex-1">
                    <div className="font-medium text-[--color-neutral-900] mb-1">
                      {issue.label}
                    </div>
                    <div className="text-sm text-[--color-neutral-600]">
                      {issue.description}
                    </div>
                  </div>
                </label>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Description */}
        <Card className="mb-6">
          <CardHeader>
            <CardTitle>Description *</CardTitle>
          </CardHeader>
          <CardContent>
            <textarea
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              placeholder="Please provide detailed information about the dispute. Include dates, specific incidents, and any relevant context that will help us understand the situation."
              className="w-full px-3 py-2 border border-[--color-neutral-300] rounded-lg focus:outline-none focus:ring-2 focus:ring-[--color-primary] h-32 resize-none"
              required
              maxLength={1000}
            />
            <div className="text-right text-xs text-[--color-neutral-500] mt-2">
              {description.length}/1000 characters
            </div>
          </CardContent>
        </Card>

        {/* Evidence Upload */}
        <Card className="mb-6">
          <CardHeader>
            <CardTitle>Upload Evidence</CardTitle>
            <p className="text-sm text-[--color-neutral-600]">
              Photos, documents, messages, or other supporting files (optional)
            </p>
          </CardHeader>
          <CardContent>
            <div
              className="border-2 border-dashed border-[--color-neutral-300] rounded-lg p-8 text-center cursor-pointer hover:border-[--color-primary] transition-colors"
              onClick={handleFileUpload}
            >
              <div className="text-4xl mb-4">📎</div>
              <div className="font-medium text-[--color-neutral-900] mb-2">
                Click to upload files
              </div>
              <div className="text-sm text-[--color-neutral-600]">
                Supports: Images, PDF, DOC, DOCX (Max 10MB each)
              </div>
            </div>

            {evidenceFiles.length > 0 && (
              <div className="mt-4 space-y-2">
                <h4 className="font-medium text-[--color-neutral-900]">Uploaded Files:</h4>
                {evidenceFiles.map((file, index) => (
                  <div key={index} className="flex items-center justify-between bg-[--color-neutral-50] p-3 rounded-lg">
                    <div className="flex items-center gap-2">
                      <span className="text-lg">📄</span>
                      <span className="text-sm font-medium">{file.name}</span>
                      <span className="text-xs text-[--color-neutral-500]">
                        ({(file.size / 1024).toFixed(1)} KB)
                      </span>
                    </div>
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={(e) => {
                        e.stopPropagation();
                        removeFile(index);
                      }}
                    >
                      ✕
                    </Button>
                  </div>
                ))}
              </div>
            )}
          </CardContent>
        </Card>

        {/* Priority Level */}
        <Card className="mb-6">
          <CardHeader>
            <CardTitle>Priority Level</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {priorityLevels.map((level) => (
                <label
                  key={level.id}
                  className={`flex items-center gap-3 p-3 border rounded-lg cursor-pointer transition-colors ${
                    priority === level.id
                      ? 'border-[--color-primary] bg-[--color-primary] bg-opacity-5'
                      : 'border-[--color-neutral-200] hover:border-[--color-primary]'
                  }`}
                >
                  <input
                    type="radio"
                    name="priority"
                    value={level.id}
                    checked={priority === level.id}
                    onChange={(e) => setPriority(e.target.value)}
                  />
                  <div>
                    <div className={`font-medium ${level.color}`}>
                      {level.label}
                    </div>
                    <div className="text-xs text-[--color-neutral-600]">
                      {level.description}
                    </div>
                  </div>
                </label>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Submit Button */}
        <Button
          onClick={handleSubmit}
          className="w-full py-3 text-lg mb-6"
          disabled={!selectedIssue || !description.trim()}
        >
          Submit Dispute
        </Button>

        {/* Info Section */}
        <div className="bg-[--color-neutral-100] p-6 rounded-lg">
          <h3 className="font-semibold text-[--color-neutral-900] mb-4">
            ⏱️ What happens next?
          </h3>
          <div className="space-y-3 text-sm text-[--color-neutral-700]">
            <div className="flex items-start gap-3">
              <span className="text-[--color-primary] font-bold">1</span>
              <p>Your dispute will be reviewed within 48 hours</p>
            </div>
            <div className="flex items-start gap-3">
              <span className="text-[--color-primary] font-bold">2</span>
              <p>Both parties will be contacted for additional information</p>
            </div>
            <div className="flex items-start gap-3">
              <span className="text-[--color-primary] font-bold">3</span>
              <p>If resolution isn't reached, the case may proceed to arbitration</p>
            </div>
            <div className="flex items-start gap-3">
              <span className="text-[--color-primary] font-bold">4</span>
              <p>You'll receive email updates throughout the process</p>
            </div>
          </div>
          
          <div className="mt-4 p-3 bg-[--color-warning] bg-opacity-10 rounded-lg">
            <p className="text-sm font-medium text-[--color-warning]">
              📞 Urgent Issues: For safety concerns or emergency situations, call our 24/7 hotline at (555) 123-4567
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}