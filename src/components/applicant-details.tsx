import React from "react";
import { Card, CardItem } from "./card";

const applicantData = {
  name: "Rahmat Hidayatullah",
  email: "rahmat.zenta@gmail.com",
  githubProfile: "https://github.com/erhahahaa",
  githubRepo: "https://github.com/erhahahaa/ellty-first-round",
};

const LinkButton = ({ href, children }: { href: string; children: React.ReactNode }) => {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="text-blue-600 hover:text-blue-800 hover:underline focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 rounded"
    >
      {children}
    </a>
  );
};

export const ApplicantDetails = () => {
  return (
    <Card className="w-92.5">
      <CardItem>
        <div className="space-y-2">
          <div className="flex justify-between items-center">
            <span className="text-[14px] text-text-primary font-medium">Name:</span>
            <span className="text-[14px] text-text-primary">{applicantData.name}</span>
          </div>
          
          <div className="flex justify-between items-center">
            <span className="text-[14px] text-text-primary font-medium">Email:</span>
            <a 
              href={`mailto:${applicantData.email}`}
              className="text-[14px] text-blue-600 hover:text-blue-800 hover:underline focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 rounded"
            >
              {applicantData.email}
            </a>
          </div>
          
          <div className="flex justify-between items-center">
            <span className="text-[14px] text-text-primary font-medium">GitHub:</span>
            <LinkButton href={applicantData.githubProfile}>
              View Profile
            </LinkButton>
          </div>
          
          <div className="flex justify-between items-center">
            <span className="text-[14px] text-text-primary font-medium">Repository:</span>
            <LinkButton href={applicantData.githubRepo}>
              View Repo
            </LinkButton>
          </div>
        </div>
      </CardItem>
    </Card>
  );
};