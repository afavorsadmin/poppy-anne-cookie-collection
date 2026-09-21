import type { MetadataRoute } from "next";
import { seoPages } from "../lib/seo-pages";
export default function sitemap():MetadataRoute.Sitemap{const base="https://thepoppyannecookiecollection.com";return[{url:base,changeFrequency:"weekly",priority:1},...Object.keys(seoPages).map(slug=>({url:`${base}/${slug}`,changeFrequency:"monthly" as const,priority:.8}))];}
