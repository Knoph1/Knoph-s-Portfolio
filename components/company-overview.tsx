"use client";

import React from "react";
import { Card, CardContent } from "@/components/ui/card"
import { Building2, Users, Award, Globe } from "lucide-react"

export function CompanyOverview() {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <h2 className="text-3xl lg:text-4xl font-bold text-balance">
                About <span className="text-primary">Omni-Legacy Limited</span>
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Established in 2020 with headquarters in Nairobi and branches in Mombasa & Eldoret, <strong>Omni-Legacy Limited</strong> was
                founded to provide end-to-end IT solutions that drive business efficiency, innovation and growth.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                We specialize in software development, IT consultancy, digital transformation, cloud solutions,
                cybersecurity and technical support for diverse clients across Kenya.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <Card className="border-border">
                <CardContent className="p-4 text-center">
                  <Building2 className="h-8 w-8 text-primary mx-auto mb-2" />
                  <p className="font-semibold">Established <className="text-sm text-muted-foreground">2022</p>
                  <p className="font-semibold">Officially Registered <className="text-sm text-muted-foreground">2026</p>
                </CardContent>
              </Card>
              <Card className="border-border">
                <CardContent className="p-4 text-center">
                  <Globe className="h-8 w-8 text-primary mx-auto mb-2" />
                  <p className="font-semibold">Locations</p>
                  <p className="text-sm text-muted-foreground">3 Offices</p>
                </CardContent>
              </Card>
              <Card className="border-border">
                <CardContent className="p-4 text-center">
                  <Award className="h-8 w-8 text-primary mx-auto mb-2" />
                  <p className="font-semibold">Compliance</p>
                  <p className="text-sm text-muted-foreground">Fully</p>
                </CardContent>
              </Card>
              <Card className="border-border">
                <CardContent className="p-4 text-center">
                  <Users className="h-8 w-8 text-primary mx-auto mb-2" />
                  <p className="font-semibold">Banking</p>
                  <p className="text-sm text-muted-foreground">Checked</p>
                </CardContent>
              </Card>
            </div>
          </div>

          <div className="space-y-6">
            <div className="bg-muted p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-3 text-primary">Our Vision</h3>
              <p className="text-muted-foreground leading-relaxed">
                To be the leading technology partner in East Africa, shaping the digital future by providing innovative,
                reliable and sustainable IT solutions.
              </p>
            </div>
            <div className="bg-muted p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-3 text-primary">Our Mission</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li>• Deliver customized software and IT services to businesses and institutions</li>
                <li>• Optimize operations through strategic IT consultancy and systems integration</li>
                <li>• Ensure ongoing technical support, cybersecurity and operational continuity</li>
                <li>• Build long-term partnerships with clients, stakeholders and communities</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
