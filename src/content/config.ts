import { defineCollection, z } from 'astro:content';

const downloadLink = z.object({
  label: z.string(),
  url: z.string().url(),
  type: z.string().optional(),
  size: z.string().optional(),
  recommended: z.boolean().optional().default(false)
});

const downloads = z.object({
  windows: z.array(downloadLink).optional(),
  macos: z.array(downloadLink).optional(),
  linux: z.array(downloadLink).optional()
});

const softwareSchema = z.object({
  title: z.string(),
  version: z.string().optional(),
  date: z.date(),
  categories: z.array(z.string()),
  platforms: z.array(z.string()),
  tags: z.array(z.string()).optional(),
  size_summary: z.string().optional(),
  developer: z.string().optional(),
  website: z.string().url().optional(),
  icon: z.string().url().optional(),
  screenshots: z.array(z.string().url()).optional(),
  safe_status: z.string().optional(),
  badges: z.array(z.string()).optional(),
  description: z.string().optional(),
  downloads: downloads,
  download_count: z.number().optional().default(0)
});

const softwareCollection = defineCollection({
  type: 'content',
  schema: softwareSchema
});

export type SoftwareFrontmatter = z.infer<typeof softwareSchema>;

export const collections = {
  software: softwareCollection
};
