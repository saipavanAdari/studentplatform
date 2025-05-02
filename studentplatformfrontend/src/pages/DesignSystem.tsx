import React from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';

const DesignSystem: React.FC = () => {
  return (
    <div className="min-h-screen bg-darker-blue text-text-white">
      <div className="container mx-auto p-6">
        <header className="mb-8">
          <h1 className="text-4xl font-bold mb-2">Design System</h1>
          <p className="text-text-muted">Complete style guide and component library</p>
        </header>
        
        <div className="flex flex-col lg:flex-row gap-8">
          <aside className="lg:w-64 bg-dark-blue rounded-lg p-4">
            <nav className="space-y-1">
              <a href="#introduction" className="sidebar-link active">
                <div className="w-5 h-5 bg-primary-blue rounded"></div>
                Introduction
              </a>
              <a href="#colors" className="sidebar-link">
                <div className="w-5 h-5 bg-primary-blue rounded-full"></div>
                Colors
              </a>
              <a href="#typography" className="sidebar-link">
                <div className="w-5 h-5 flex items-center justify-center">T</div>
                Typography
              </a>
              <a href="#spacing" className="sidebar-link">
                <div className="w-5 h-5 flex items-center justify-center">|</div>
                Spacing
              </a>
              <a href="#components" className="sidebar-link">
                <div className="w-5 h-5 flex items-center justify-center">[]</div>
                Components
              </a>
              <a href="#forms" className="sidebar-link">
                <div className="w-5 h-5 flex items-center justify-center">□</div>
                Forms
              </a>
              <a href="#navigation" className="sidebar-link">
                <div className="w-5 h-5 flex items-center justify-center">◇</div>
                Navigation
              </a>
              <a href="#templates" className="sidebar-link">
                <div className="w-5 h-5 flex items-center justify-center">◻</div>
                Templates
              </a>
              <a href="#icons" className="sidebar-link">
                <div className="w-5 h-5 flex items-center justify-center">★</div>
                Icons
              </a>
              <a href="#guidelines" className="sidebar-link">
                <div className="w-5 h-5 flex items-center justify-center">✓</div>
                Guidelines
              </a>
            </nav>
          </aside>
          
          <main className="flex-1 bg-dark-blue rounded-lg p-8">
            <section id="introduction" className="mb-12">
              <h2 className="text-2xl font-bold mb-4">Introduction</h2>
              
              <div className="mb-8">
                <h3 className="text-xl font-semibold mb-3">Project Overview</h3>
                <div className="bg-secondary-gray rounded-lg p-6">
                  <p className="text-text-light">
                    This design system provides a comprehensive guide for creating consistent, accessible, and visually appealing user interfaces across our platform.
                  </p>
                  
                  <div className="flex items-center gap-4 mt-4">
                    <div className="flex items-center gap-2 text-primary-blue">
                      <div className="w-5 h-5 flex items-center justify-center">&lt;/&gt;</div>
                      <span>Version 2.0</span>
                    </div>
                    <div className="flex items-center gap-2 text-text-light">
                      <div className="w-5 h-5 flex items-center justify-center">⏱</div>
                      <span>Last Updated: May 2025</span>
                    </div>
                  </div>
                </div>
              </div>
              
              <h3 className="text-xl font-semibold mb-3">Design Principles</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-secondary-gray rounded-lg p-6">
                  <div className="text-primary-blue mb-3">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                  <h4 className="text-lg font-medium mb-2">Consistency</h4>
                  <p className="text-text-muted">Unified design language across all interfaces</p>
                </div>
                
                <div className="bg-secondary-gray rounded-lg p-6">
                  <div className="text-primary-blue mb-3">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                    </svg>
                  </div>
                  <h4 className="text-lg font-medium mb-2">Accessibility</h4>
                  <p className="text-text-muted">Inclusive design for all users</p>
                </div>
                
                <div className="bg-secondary-gray rounded-lg p-6">
                  <div className="text-primary-blue mb-3">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                  <h4 className="text-lg font-medium mb-2">Efficiency</h4>
                  <p className="text-text-muted">Optimized for performance and usability</p>
                </div>
              </div>
            </section>
            
            <section id="theme-description" className="mb-12">
              <h2 className="text-2xl font-bold mb-4">Theme Description</h2>
              <div className="bg-secondary-gray rounded-lg p-6">
                <h3 className="text-xl font-semibold mb-3">Dark Theme</h3>
                <p className="text-text-light mb-6">
                  Our primary interface theme uses a sophisticated dark color palette, enhancing content visibility and reducing eye strain.
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <div className="mb-3">
                      <span className="text-text-muted block mb-1">Primary Background</span>
                      <div className="flex items-center gap-2">
                        <div className="w-6 h-6 rounded bg-darker-blue"></div>
                        <span>#030712</span>
                      </div>
                    </div>
                    
                    <div className="mb-3">
                      <span className="text-text-muted block mb-1">Secondary Background</span>
                      <div className="flex items-center gap-2">
                        <div className="w-6 h-6 rounded bg-dark-blue"></div>
                        <span>#111827</span>
                      </div>
                    </div>
                    
                    <div>
                      <span className="text-text-muted block mb-1">Accent Color</span>
                      <div className="flex items-center gap-2">
                        <div className="w-6 h-6 rounded bg-primary-blue"></div>
                        <span>#3B82F6</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            
            <section id="typography" className="mb-12">
              <h2 className="text-2xl font-bold mb-4">Typography Guidelines</h2>
              <div className="bg-secondary-gray rounded-lg p-8">
                <div className="flex flex-col md:flex-row gap-8">
                  <div className="md:w-1/3">
                    <div className="text-6xl mb-4">Aa</div>
                    <h4 className="mb-2">Inter Font Family</h4>
                    <div className="text-text-muted mb-1">Bold - 700</div>
                    <div className="text-text-muted mb-1">Medium - 500</div>
                    <div className="text-text-muted">Regular - 400</div>
                  </div>
                  
                  <div className="md:w-2/3">
                    <div className="mb-6">
                      <span className="text-text-muted text-sm block mb-1">Header 1</span>
                      <h1 className="text-4xl font-bold">32px Bold</h1>
                    </div>
                    
                    <div className="mb-6">
                      <span className="text-text-muted text-sm block mb-1">Body Text</span>
                      <p className="text-base">16px Regular</p>
                    </div>
                    
                    <div>
                      <span className="text-text-muted text-sm block mb-1">Caption</span>
                      <p className="text-sm">14px Regular</p>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            
            <section id="components" className="mb-12">
              <h2 className="text-2xl font-bold mb-4">Components</h2>
              
              <h3 className="text-xl font-semibold mb-3">Buttons</h3>
              <div className="flex flex-wrap gap-4 mb-8">
                <Button className="bg-primary-blue hover:bg-primary-blue/90">
                  Primary Button
                </Button>
                <Button variant="secondary">Secondary Button</Button>
                <Button variant="destructive">Danger Button</Button>
              </div>
              
              <h3 className="text-xl font-semibold mb-3">Input Fields</h3>
              <div className="space-y-4 mb-8">
                <Input placeholder="Regular Input" className="bg-secondary-gray border-secondary-gray/50" />
                <Textarea placeholder="Text area" className="bg-secondary-gray border-secondary-gray/50" />
              </div>
              
              <h3 className="text-xl font-semibold mb-3">Cards</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Card className="bg-secondary-gray border-secondary-gray/50">
                  <CardHeader>
                    <CardTitle>Card Title</CardTitle>
                    <CardDescription>Card description with some example text to show how content looks inside.</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p>Card content goes here.</p>
                  </CardContent>
                </Card>
                
                <Card className="bg-secondary-gray border-secondary-gray/50">
                  <CardHeader>
                    <CardTitle>Interactive Card</CardTitle>
                    <CardDescription>Card with action button.</CardDescription>
                  </CardHeader>
                  <CardContent className="flex justify-end">
                    <Button className="bg-primary-blue hover:bg-primary-blue/90" size="sm">
                      Action
                    </Button>
                  </CardContent>
                </Card>
              </div>
            </section>
          </main>
        </div>
      </div>
    </div>
  );
};

export default DesignSystem;
