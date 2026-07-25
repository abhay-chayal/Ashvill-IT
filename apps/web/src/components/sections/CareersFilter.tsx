'use client';

import { useState, useMemo } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { MapPin, Clock, ArrowRight, Search, Briefcase, Code2, Sparkles, Building2, Filter, X } from 'lucide-react';
import { Card } from '@/components/ui/Card';
import { JobListing } from '@/content/careers';

interface CareersFilterProps {
  jobs: JobListing[];
}

export function CareersFilter({ jobs }: CareersFilterProps) {
  const [selectedCategory, setSelectedCategory] = useState<'All' | 'Management' | 'Technical'>('All');
  const [selectedDepartment, setSelectedDepartment] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');

  // Calculate counters
  const totalCount = jobs.length;
  const managementCount = useMemo(() => jobs.filter(j => j.category === 'Management').length, [jobs]);
  const technicalCount = useMemo(() => jobs.filter(j => j.category === 'Technical').length, [jobs]);

  // Unique departments
  const departments = useMemo(() => {
    const deps = Array.from(new Set(jobs.map(j => j.department)));
    return ['All', ...deps];
  }, [jobs]);

  // Filtered jobs
  const filteredJobs = useMemo(() => {
    return jobs.filter(job => {
      if (selectedCategory !== 'All' && job.category !== selectedCategory) {
        return false;
      }
      if (selectedDepartment !== 'All' && job.department !== selectedDepartment) {
        return false;
      }
      if (searchQuery.trim() !== '') {
        const query = searchQuery.toLowerCase();
        const matchesTitle = job.title.toLowerCase().includes(query);
        const matchesDept = job.department.toLowerCase().includes(query);
        const matchesDesc = job.description.toLowerCase().includes(query);
        const matchesReq = job.requirements.some(r => r.toLowerCase().includes(query));
        return matchesTitle || matchesDept || matchesDesc || matchesReq;
      }
      return true;
    });
  }, [jobs, selectedCategory, selectedDepartment, searchQuery]);

  const resetFilters = () => {
    setSelectedCategory('All');
    setSelectedDepartment('All');
    setSearchQuery('');
  };

  return (
    <div className="space-y-8">
      {/* Category Tab Selector & Search Bar */}
      <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between border-b border-surface-200 pb-6">
        {/* Main Category Tabs */}
        <div className="inline-flex flex-wrap gap-2 p-1 rounded-2xl bg-surface-100 border border-surface-200">
          <button
            type="button"
            onClick={() => setSelectedCategory('All')}
            className={`inline-flex items-center gap-2 px-4 py-2.5 rounded-xl font-medium text-sm transition-all duration-200 cursor-pointer ${
              selectedCategory === 'All'
                ? 'bg-surface-900 text-white shadow-sm font-semibold'
                : 'text-surface-600 hover:text-surface-900 hover:bg-surface-200/50'
            }`}
          >
            <span>All Openings</span>
            <span className={`px-2 py-0.5 rounded-full text-xs font-semibold ${
              selectedCategory === 'All' ? 'bg-white/20 text-white' : 'bg-surface-200 text-surface-700'
            }`}>
              {totalCount}
            </span>
          </button>

          <button
            type="button"
            onClick={() => setSelectedCategory('Management')}
            className={`inline-flex items-center gap-2 px-4 py-2.5 rounded-xl font-medium text-sm transition-all duration-200 cursor-pointer ${
              selectedCategory === 'Management'
                ? 'bg-brand-600 text-white shadow-sm font-semibold'
                : 'text-surface-600 hover:text-surface-900 hover:bg-surface-200/50'
            }`}
          >
            <Briefcase className="h-4 w-4" />
            <span>Management & Leadership</span>
            <span className={`px-2 py-0.5 rounded-full text-xs font-semibold ${
              selectedCategory === 'Management' ? 'bg-white/20 text-white' : 'bg-surface-200 text-surface-700'
            }`}>
              {managementCount}
            </span>
          </button>

          <button
            type="button"
            onClick={() => setSelectedCategory('Technical')}
            className={`inline-flex items-center gap-2 px-4 py-2.5 rounded-xl font-medium text-sm transition-all duration-200 cursor-pointer ${
              selectedCategory === 'Technical'
                ? 'bg-brand-600 text-white shadow-sm font-semibold'
                : 'text-surface-600 hover:text-surface-900 hover:bg-surface-200/50'
            }`}
          >
            <Code2 className="h-4 w-4" />
            <span>Technical & Engineering</span>
            <span className={`px-2 py-0.5 rounded-full text-xs font-semibold ${
              selectedCategory === 'Technical' ? 'bg-white/20 text-white' : 'bg-surface-200 text-surface-700'
            }`}>
              {technicalCount}
            </span>
          </button>
        </div>

        {/* Search Bar */}
        <div className="relative w-full lg:w-80">
          <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-surface-400" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search titles, skills, or roles..."
            className="w-full rounded-xl bg-white border border-surface-200 pl-10 pr-9 py-2.5 text-sm text-surface-900 placeholder:text-surface-400 focus:outline-none focus:ring-2 focus:ring-brand-500/30 focus:border-brand-500 transition-all shadow-xs"
          />
          {searchQuery && (
            <button
              type="button"
              onClick={() => setSearchQuery('')}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-surface-400 hover:text-surface-600 cursor-pointer"
            >
              <X className="h-4 w-4" />
            </button>
          )}
        </div>
      </div>

      {/* Secondary Department Filters & Results Bar */}
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex items-center gap-2 flex-wrap text-sm">
          <span className="inline-flex items-center gap-1.5 font-medium text-surface-500 mr-1">
            <Filter className="h-3.5 w-3.5 text-surface-400" /> Department:
          </span>
          {departments.map((dept) => (
            <button
              key={dept}
              type="button"
              onClick={() => setSelectedDepartment(dept)}
              className={`px-3 py-1 rounded-lg text-xs font-medium transition-all cursor-pointer ${
                selectedDepartment === dept
                  ? 'bg-surface-900 text-white font-semibold'
                  : 'bg-surface-100 text-surface-600 hover:bg-surface-200 border border-surface-200/60'
              }`}
            >
              {dept}
            </button>
          ))}
        </div>

        <div className="text-xs text-surface-500 font-medium">
          Showing <span className="font-semibold text-surface-900">{filteredJobs.length}</span> of {totalCount} open positions
        </div>
      </div>

      {/* Job Listings List */}
      {filteredJobs.length > 0 ? (
        <div className="space-y-4">
          <AnimatePresence mode="popLayout">
            {filteredJobs.map((job) => (
              <motion.div
                key={job.slug}
                layout
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -12 }}
                transition={{ duration: 0.2 }}
              >
                <Link href={`/careers/${job.slug}`} className="block group">
                  <Card hover className="relative overflow-hidden border border-surface-200 bg-white transition-all duration-300 group-hover:border-brand-500/40 group-hover:shadow-elevated">
                    {/* Category Accent Bar */}
                    <div className="absolute top-0 left-0 bottom-0 w-1 bg-brand-500 opacity-80 group-hover:opacity-100 transition-opacity" />

                    <div className="pl-3 sm:pl-4 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-5">
                      <div className="space-y-2.5 max-w-3xl">
                        {/* Badges line */}
                        <div className="flex flex-wrap items-center gap-2">
                          <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-xs font-semibold bg-brand-50 text-brand-700 border border-brand-200">
                            {job.category === 'Management' ? (
                              <Briefcase className="h-3 w-3" />
                            ) : (
                              <Code2 className="h-3 w-3" />
                            )}
                            {job.category}
                          </span>

                          <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-xs font-medium bg-surface-100 text-surface-700 border border-surface-200">
                            <Building2 className="h-3 w-3 text-surface-400" />
                            {job.department}
                          </span>

                          {job.featured && (
                            <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-xs font-semibold bg-brand-100/60 text-brand-800 border border-brand-300">
                              <Sparkles className="h-3 w-3 text-brand-600" />
                              Priority Hiring
                            </span>
                          )}
                        </div>

                        {/* Job Title */}
                        <h2 className="font-display text-xl font-bold text-surface-900 group-hover:text-brand-600 transition-colors">
                          {job.title}
                        </h2>

                        {/* Short Description */}
                        <p className="text-sm text-surface-600 line-clamp-2 leading-relaxed">
                          {job.description}
                        </p>

                        {/* Meta Tags */}
                        <div className="pt-1 flex flex-wrap gap-4 text-xs font-medium text-surface-500">
                          <span className="flex items-center gap-1">
                            <MapPin className="h-3.5 w-3.5 text-surface-400" />
                            {job.location}
                          </span>
                          <span className="flex items-center gap-1">
                            <Clock className="h-3.5 w-3.5 text-surface-400" />
                            {job.type}
                          </span>
                          <span className="flex items-center gap-1">
                            <Briefcase className="h-3.5 w-3.5 text-surface-400" />
                            {job.experience}
                          </span>
                        </div>
                      </div>

                      {/* View role button link matching Services/Case Studies theme */}
                      <div className="pt-2 sm:pt-0 flex items-center sm:self-center shrink-0">
                        <span className="inline-flex items-center gap-1 text-sm font-semibold text-brand-600 group-hover:text-brand-700 transition-colors">
                          View role
                          <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                        </span>
                      </div>
                    </div>
                  </Card>
                </Link>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      ) : (
        <div className="py-16 text-center bg-white rounded-2xl border border-surface-200 p-8 space-y-4 shadow-sm">
          <div className="mx-auto w-12 h-12 rounded-full bg-surface-100 flex items-center justify-center text-surface-400">
            <Search className="h-6 w-6" />
          </div>
          <h3 className="font-display text-lg font-bold text-surface-900">No positions match your filters</h3>
          <p className="text-sm text-surface-500 max-w-md mx-auto">
            We couldn't find any openings matching your search criteria. Try resetting your search filters or check back soon.
          </p>
          <button
            type="button"
            onClick={resetFilters}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-semibold bg-brand-600 text-white hover:bg-brand-700 transition-colors cursor-pointer"
          >
            Reset All Filters
          </button>
        </div>
      )}
    </div>
  );
}


