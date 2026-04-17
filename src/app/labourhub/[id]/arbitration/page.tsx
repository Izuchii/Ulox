'use client';

import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { Badge } from '@/components/ui/Badge';

export default function ArbitrationPage({ params }: { params: { id: string } }) {
  const [currentQuestion, setCurrentQuestion] = useState(1);
  const [answers, setAnswers] = useState<Record<number, any>>({});
  
  const totalQuestions = 7;
  const caseRef = `ARB-${params.id}-2024-001`;
  
  const questions = [
    {
      id: 1,
      type: 'yesno',
      question: 'Did you arrive at the job site on the agreed start date?',
      options: ['Yes', 'No']
    },
    {
      id: 2,
      type: 'yesno',
      question: 'Were you provided with the necessary tools and equipment to complete your work?',
      options: ['Yes', 'No']
    },
    {
      id: 3,
      type: 'multiple',
      question: 'How many hours did you work on the final day before the dispute?',
      options: ['Less than 4 hours', '4-6 hours', '6-8 hours', 'More than 8 hours', 'Did not work that day']
    },
    {
      id: 4,
      type: 'yesno',
      question: 'Did you receive any written or verbal warnings about your performance?',
      options: ['Yes', 'No']
    },
    {
      id: 5,
      type: 'multiple',
      question: 'What was the primary reason for leaving the job?',
      options: ['Completed as planned', 'Dismissed by employer', 'Safety concerns', 'Payment issues', 'Personal reasons']
    },
    {
      id: 6,
      type: 'yesno',
      question: 'Do you have documentation (photos, messages, receipts) to support your claim?',
      options: ['Yes', 'No']
    },
    {
      id: 7,
      type: 'multiple',
      question: 'What outcome are you seeking from this arbitration?',
      options: ['Full payment of agreed amount', 'Partial payment adjustment', 'Reinstatement to job', 'Damages for wrongful termination', 'Other']
    }
  ];

  const currentQuestionData = questions.find(q => q.id === currentQuestion);
  const progress = (currentQuestion / totalQuestions) * 100;

  const handleAnswer = (answer: string) => {
    setAnswers(prev => ({
      ...prev,
      [currentQuestion]: answer
    }));
  };

  const handleNext = () => {
    if (!answers[currentQuestion]) {
      alert('Please select an answer before proceeding');
      return;
    }

    if (currentQuestion < totalQuestions) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      // Submit questionnaire
      console.log('Submitting questionnaire:', answers);
      alert('Questionnaire completed. The arbitrator will review your responses.');
      // In real app, would redirect or show completion screen
    }
  };

  const handlePrevious = () => {
    if (currentQuestion > 1) {
      setCurrentQuestion(currentQuestion - 1);
    }
  };

  const steps = [
    { id: 'filed', label: 'Filed', status: 'completed' },
    { id: 'review', label: 'Review', status: 'completed' },
    { id: 'questionnaire', label: 'Questionnaire', status: 'active' },
    { id: 'decision', label: 'Decision', status: 'pending' }
  ];

  return (
    <div className="min-h-screen bg-[--color-neutral-50] py-8">
      <div className="max-w-2xl mx-auto px-4">
        <div className="mb-8">
          <h1 className="text-2xl font-bold text-[--color-neutral-900] mb-2">
            Arbitration Questionnaire
          </h1>
          <div className="flex items-center gap-4">
            <Badge variant="default" className="font-mono">
              Case: {caseRef}
            </Badge>
            <span className="text-sm text-[--color-neutral-600]">
              Job ID: {params.id}
            </span>
          </div>
        </div>

        {/* Status Steps */}
        <Card className="mb-8">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              {steps.map((step, index) => (
                <React.Fragment key={step.id}>
                  <div className="flex flex-col items-center">
                    <div
                      className={`w-10 h-10 rounded-full flex items-center justify-center text-sm font-medium ${
                        step.status === 'completed'
                          ? 'bg-[--color-success] text-white'
                          : step.status === 'active'
                          ? 'bg-[--color-primary] text-white'
                          : 'bg-[--color-neutral-200] text-[--color-neutral-600]'
                      }`}
                    >
                      {step.status === 'completed' ? '✓' : index + 1}
                    </div>
                    <span
                      className={`text-xs mt-2 ${
                        step.status === 'active'
                          ? 'text-[--color-primary] font-medium'
                          : 'text-[--color-neutral-600]'
                      }`}
                    >
                      {step.label}
                    </span>
                  </div>
                  {index < steps.length - 1 && (
                    <div
                      className={`flex-1 h-0.5 mx-4 ${
                        index < 2 ? 'bg-[--color-success]' : 'bg-[--color-neutral-200]'
                      }`}
                    />
                  )}
                </React.Fragment>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Progress */}
        <div className="mb-6">
          <div className="flex items-center justify-between text-sm text-[--color-neutral-600] mb-2">
            <span>Question {currentQuestion} of {totalQuestions}</span>
            <span>{Math.round(progress)}% Complete</span>
          </div>
          <div className="w-full bg-[--color-neutral-200] rounded-full h-2">
            <div 
              className="bg-[--color-primary] h-2 rounded-full transition-all duration-300"
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>

        {/* Question Card */}
        <Card className="mb-6">
          <CardHeader>
            <CardTitle className="text-lg">
              {currentQuestionData?.question}
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {currentQuestionData?.options.map((option, index) => (
                <label
                  key={index}
                  className={`flex items-center gap-3 p-4 border rounded-lg cursor-pointer transition-colors ${
                    answers[currentQuestion] === option
                      ? 'border-[--color-primary] bg-[--color-primary] bg-opacity-5'
                      : 'border-[--color-neutral-200] hover:border-[--color-primary]'
                  }`}
                >
                  <input
                    type="radio"
                    name={`question-${currentQuestion}`}
                    value={option}
                    checked={answers[currentQuestion] === option}
                    onChange={(e) => handleAnswer(e.target.value)}
                    className="text-[--color-primary]"
                  />
                  <span className="text-[--color-neutral-900]">{option}</span>
                </label>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Navigation Buttons */}
        <div className="flex gap-4 mb-6">
          <Button
            variant="outline"
            onClick={handlePrevious}
            disabled={currentQuestion === 1}
            className="flex-1"
          >
            Previous
          </Button>
          <Button
            onClick={handleNext}
            disabled={!answers[currentQuestion]}
            className="flex-1"
          >
            {currentQuestion === totalQuestions ? 'Submit Questionnaire' : 'Next Question'}
          </Button>
        </div>

        {/* Warning Notice */}
        <div className="bg-[--color-warning] bg-opacity-10 border border-[--color-warning] border-opacity-30 p-4 rounded-lg">
          <div className="flex items-start gap-3">
            <span className="text-[--color-warning] text-xl">⚠️</span>
            <div>
              <h4 className="font-medium text-[--color-warning] mb-2">
                Important Notice
              </h4>
              <p className="text-sm text-[--color-neutral-700]">
                Your responses are recorded and binding. Please answer all questions truthfully and accurately. 
                False information may result in dismissal of your case and potential penalties.
              </p>
            </div>
          </div>
        </div>

        {/* Help Section */}
        <div className="mt-6 text-center">
          <p className="text-xs text-[--color-neutral-500] mb-2">
            Need help understanding a question?
          </p>
          <div className="flex justify-center gap-4">
            <Button variant="ghost" size="sm">
              Live Chat Support
            </Button>
            <Button variant="ghost" size="sm">
              Call (555) 123-4567
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}