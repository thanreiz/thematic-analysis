import React, { useState, useEffect, useRef } from 'react';
import { ChevronRight, ChevronDown, FileText, AlertCircle, CheckCircle, Search, Users, Activity, MousePointer2 } from 'lucide-react';

const MindMap = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    // Data Structure mirroring the Thematic Analysis
    const treeData = {
      id: 'root',
      label: 'PLM Document Processing Analysis',
      type: 'root',
      icon: <Activity size={24} />,
      children: [
        {
          id: 'sop1',
          label: 'SOP 1: Current Workflow',
          type: 'sop',
          icon: <Search size={20} />,
          description: 'Current procedures and workflow analysis',
          children: [
            {
              id: 'sop1-t1',
              label: 'Fragmented Hybrid Workflow',
              type: 'theme',
              description: 'Process starts online (forms/email) but ends manually.',
              quote: '"Kuha ng form, fill-up... then submit sa window."',
              children: [
                { id: 'sop1-t1-d1', label: 'Starts Digital (GForms)', type: 'detail' },
                { id: 'sop1-t1-d2', label: 'Ends Physical (Onsite)', type: 'detail' },
                { id: 'sop1-t1-d3', label: 'Disjointed Tools', type: 'detail' }
              ]
            },
            {
              id: 'sop1-t2',
              label: 'Absence of Transparency',
              type: 'theme',
              description: 'The "Blind Spot" - no visibility after submission.',
              quote: '"There\'s no way of tracking."',
              children: [
                { id: 'sop1-t2-d1', label: 'No Tracking ID', type: 'detail' },
                { id: 'sop1-t2-d2', label: 'Waiting Game', type: 'detail' },
                { id: 'sop1-t2-d3', label: 'Status Unknown', type: 'detail' }
              ]
            },
            {
              id: 'sop1-t3',
              label: 'Undefined Turnaround',
              type: 'theme',
              description: 'Lack of clear time guidelines.',
              quote: '"Hindi at prone ito sa errors."',
              children: [
                { id: 'sop1-t3-d1', label: 'No Deadlines', type: 'detail' },
                { id: 'sop1-t3-d2', label: 'Unpredictable', type: 'detail' }
              ]
            }
          ]
        },
        {
          id: 'sop2',
          label: 'SOP 2: Student Experience',
          type: 'sop',
          icon: <Users size={20} />,
          description: 'Experiences of students requesting documents',
          children: [
            {
              id: 'sop2-t1',
              label: 'Authority Bottlenecks',
              type: 'theme',
              description: 'Delays caused by missing signatories.',
              quote: '"Laging wala yung pipirma."',
              children: [
                { id: 'sop2-t1-d1', label: 'Absent Signatories', type: 'detail' },
                { id: 'sop2-t1-d2', label: 'No Delegation', type: 'detail' },
                { id: 'sop2-t1-d3', label: 'Workflow Halts', type: 'detail' }
              ]
            },
            {
              id: 'sop2-t2',
              label: 'Burden of Manual Follow-ups',
              type: 'theme',
              description: 'Students must physically check status.',
              quote: '"Kailangan mo pa kulitin para lang maasikaso."',
              children: [
                { id: 'sop2-t2-d1', label: 'Physical Visits', type: 'detail' },
                { id: 'sop2-t2-d2', label: 'Frequent Nagging', type: 'detail' },
                { id: 'sop2-t2-d3', label: 'Costly for Students', type: 'detail' }
              ]
            },
            {
              id: 'sop2-t3',
              label: 'Perceived Inefficiency',
              type: 'theme',
              description: 'Negative sentiment on speed vs effort.',
              quote: '"Lagi hindi makatotohanan ang araw..."',
              children: [
                { id: 'sop2-t3-d1', label: 'Slow Processing', type: 'detail' },
                { id: 'sop2-t3-d2', label: 'Just Printing/Stamping', type: 'detail' }
              ]
            }
          ]
        },
        {
          id: 'sop3',
          label: 'SOP 3: Enhancements',
          type: 'sop',
          icon: <CheckCircle size={20} />,
          description: 'Suggested interventions and improvements',
          children: [
            {
              id: 'sop3-t1',
              label: 'Digital Tracking System',
              type: 'theme',
              description: 'The #1 recommendation for transparency.',
              quote: '"Kailangan... maayos na digital tracking system."',
              children: [
                { id: 'sop3-t1-d1', label: 'Real-time Updates', type: 'detail' },
                { id: 'sop3-t1-d2', label: 'Online Portal', type: 'detail' },
                { id: 'sop3-t1-d3', label: 'Remove Mystery', type: 'detail' }
              ]
            },
            {
              id: 'sop3-t2',
              label: 'Workforce Reform',
              type: 'theme',
              description: 'Accountability and better staffing.',
              quote: '"Mas maging organisado at competent."',
              children: [
                { id: 'sop3-t2-d1', label: 'Delegate Authority', type: 'detail' },
                { id: 'sop3-t2-d2', label: 'Double Checking', type: 'detail' },
                { id: 'sop3-t2-d3', label: 'Staff Accountability', type: 'detail' }
              ]
            },
            {
              id: 'sop3-t3',
              label: 'Accessibility',
              type: 'theme',
              description: 'Helping students who live far away.',
              quote: '"Hindi lahat ng student ay malapit."',
              children: [
                { id: 'sop3-t3-d1', label: 'Remote Requests', type: 'detail' },
                { id: 'sop3-t3-d2', label: 'Reduce Travel', type: 'detail' }
              ]
            }
          ]
        }
      ]
    };
    setData(treeData);
  }, []);

  if (!data) return <div className="flex items-center justify-center h-screen text-slate-500">Loading Mind Map...</div>;

  return (
    <div className="min-h-screen bg-slate-50 p-8 font-sans overflow-auto selection:bg-blue-100">
      <div className="max-w-6xl mx-auto">
        <header className="mb-8 text-center">
          <h1 className="text-3xl font-bold text-slate-800 mb-2">Research Findings Mind Map</h1>
          <p className="text-slate-600">Interdepartmental Document Processing System in PLM</p>
          <div className="mt-4 flex items-center justify-center gap-2 text-sm text-slate-500 bg-white inline-flex px-4 py-2 rounded-full shadow-sm">
            <MousePointer2 size={16} />
            <span>Click nodes to expand/collapse insights</span>
          </div>
        </header>
        
        <div className="bg-white rounded-xl shadow-xl p-8 min-h-[600px] overflow-x-auto border border-slate-200">
          <MindMapNode node={data} isRoot={true} />
        </div>
      </div>
    </div>
  );
};

const MindMapNode = ({ node, isRoot = false }) => {
  const [isExpanded, setIsExpanded] = useState(isRoot); // Root expanded by default
  const hasChildren = node.children && node.children.length > 0;

  // Colors based on type
  const getStyles = (type) => {
    switch (type) {
      case 'root': return 'bg-blue-600 text-white border-blue-700 shadow-blue-200';
      case 'sop': return 'bg-indigo-100 text-indigo-900 border-indigo-200 hover:bg-indigo-200';
      case 'theme': return 'bg-emerald-50 text-emerald-900 border-emerald-200 hover:bg-emerald-100';
      case 'detail': return 'bg-slate-50 text-slate-600 border-slate-200 text-sm';
      default: return 'bg-gray-100';
    }
  };

  const styles = getStyles(node.type);

  return (
    <div className="flex flex-col items-start">
      <div className="flex items-center">
        {/* Node Card */}
        <div 
          onClick={() => hasChildren && setIsExpanded(!isExpanded)}
          className={`
            relative flex items-center gap-3 px-4 py-3 rounded-lg border shadow-sm cursor-pointer transition-all duration-300
            ${styles}
            ${hasChildren ? 'hover:scale-105 active:scale-95' : ''}
            ${!isExpanded && hasChildren ? 'shadow-md' : ''}
            min-w-[200px] max-w-[300px] z-10
          `}
        >
          {node.icon && <span className="flex-shrink-0">{node.icon}</span>}
          
          <div className="flex-1">
            <h3 className={`font-semibold ${node.type === 'detail' ? 'font-normal' : ''}`}>
              {node.label}
            </h3>
            {node.description && isExpanded && (
              <p className="text-xs opacity-80 mt-1 leading-snug">{node.description}</p>
            )}
          </div>

          {hasChildren && (
            <div className={`transition-transform duration-300 ${isExpanded ? 'rotate-90' : ''}`}>
              <ChevronRight size={16} />
            </div>
          )}
        </div>

        {/* Quote Tooltip (Visible on hover if available) */}
        {node.quote && (
           <div className="hidden md:block ml-4 text-xs italic text-slate-400 max-w-[200px] border-l-2 border-slate-300 pl-2">
             {node.quote}
           </div>
        )}
      </div>

      {/* Children Container (Recursive) */}
      <div className={`
        flex flex-col border-l-2 border-slate-200 ml-8 pl-8 my-2 space-y-4 transition-all duration-500 origin-top-left
        ${isExpanded ? 'opacity-100 max-h-[2000px] py-4' : 'opacity-0 max-h-0 overflow-hidden py-0'}
      `}>
        {hasChildren && node.children.map((child) => (
          <div key={child.id} className="relative">
            {/* Horizontal connecting line */}
            <div className="absolute -left-8 top-6 w-8 h-0.5 bg-slate-200"></div>
            <MindMapNode node={child} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default MindMap;