
import React from 'react';
import { useLanguage } from '../../contexts/LanguageContext';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  Map as MapIcon, 
  Plane, 
  Car, 
  Bus, 
  Ship, 
  Calendar, 
  Clock, 
  DollarSign,
  Route 
} from 'lucide-react';

const TransportationGuide = () => {
  const { t, language } = useLanguage();

  const formatCurrency = (amount: number) => {
    return language === 'en' ? `$${amount}` : `฿${amount * 35}`;
  };

  return (
    <div className="bg-white shadow-lg rounded-xl p-6">
      <div className="mb-8">
        <p className="text-lg mb-6">{t('plan.transportation.description')}</p>
        
        <Tabs defaultValue="to-island" className="w-full">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="to-island">
              {t('plan.transportation.toIsland')}
            </TabsTrigger>
            <TabsTrigger value="on-island">
              {t('plan.transportation.onIsland')}
            </TabsTrigger>
          </TabsList>
          
          <TabsContent value="to-island" className="mt-6">
            <div className="space-y-6">
              <div className="flex flex-col lg:flex-row gap-6">
                <Card className="w-full lg:w-2/3">
                  <CardHeader>
                    <CardTitle>{t('plan.transportation.routes')}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="border p-4 rounded-lg mb-6 bg-gray-50 h-64 flex items-center justify-center">
                      <div className="text-center">
                        <Route className="h-8 w-8 mx-auto mb-2 text-gray-400" />
                        <p className="text-gray-500">{t('plan.transportation.routeMapPlaceholder')}</p>
                      </div>
                    </div>
                    
                    <div className="space-y-4">
                      <div className="p-3 border rounded-md flex items-start gap-4">
                        <div className="bg-primary/10 p-2 rounded-full">
                          <Plane className="h-5 w-5 text-primary" />
                        </div>
                        <div>
                          <h3 className="font-semibold">{t('plan.transportation.fromKrabi')}</h3>
                          <p className="text-sm text-gray-600 mt-1">
                            {t('plan.transportation.krabiDescription')}
                          </p>
                          <div className="mt-2 flex items-center text-sm gap-4">
                            <span className="flex items-center gap-1">
                              <Clock className="h-4 w-4 text-gray-500" />
                              2-3 {t('plan.transportation.hours')}
                            </span>
                            <span className="flex items-center gap-1">
                              <DollarSign className="h-4 w-4 text-gray-500" />
                              {formatCurrency(15)} - {formatCurrency(30)}
                            </span>
                          </div>
                        </div>
                      </div>
                      
                      <div className="p-3 border rounded-md flex items-start gap-4">
                        <div className="bg-primary/10 p-2 rounded-full">
                          <Ship className="h-5 w-5 text-primary" />
                        </div>
                        <div>
                          <h3 className="font-semibold">{t('plan.transportation.fromPhiPhi')}</h3>
                          <p className="text-sm text-gray-600 mt-1">
                            {t('plan.transportation.phiPhiDescription')}
                          </p>
                          <div className="mt-2 flex items-center text-sm gap-4">
                            <span className="flex items-center gap-1">
                              <Clock className="h-4 w-4 text-gray-500" />
                              1.5 {t('plan.transportation.hours')}
                            </span>
                            <span className="flex items-center gap-1">
                              <DollarSign className="h-4 w-4 text-gray-500" />
                              {formatCurrency(20)} - {formatCurrency(35)}
                            </span>
                          </div>
                        </div>
                      </div>
                      
                      <div className="p-3 border rounded-md flex items-start gap-4">
                        <div className="bg-primary/10 p-2 rounded-full">
                          <Bus className="h-5 w-5 text-primary" />
                        </div>
                        <div>
                          <h3 className="font-semibold">{t('plan.transportation.fromBangkok')}</h3>
                          <p className="text-sm text-gray-600 mt-1">
                            {t('plan.transportation.bangkokDescription')}
                          </p>
                          <div className="mt-2 flex items-center text-sm gap-4">
                            <span className="flex items-center gap-1">
                              <Clock className="h-4 w-4 text-gray-500" />
                              12-15 {t('plan.transportation.hours')}
                            </span>
                            <span className="flex items-center gap-1">
                              <DollarSign className="h-4 w-4 text-gray-500" />
                              {formatCurrency(40)} - {formatCurrency(60)}
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
                
                <Card className="w-full lg:w-1/3">
                  <CardHeader>
                    <CardTitle>{t('plan.transportation.ferrySchedule')}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center gap-2 mb-4">
                      <Calendar className="h-4 w-4" />
                      <span className="text-sm font-medium">{t('plan.transportation.highSeason')}</span>
                    </div>
                    
                    <div className="space-y-3">
                      <div className="border-b pb-2">
                        <div className="font-medium">{t('plan.transportation.krabiToLanta')}</div>
                        <div className="grid grid-cols-2 mt-1 text-sm">
                          <div className="text-gray-500">{t('plan.transportation.departure')}</div>
                          <div>10:30, 13:30, 15:30</div>
                        </div>
                      </div>
                      
                      <div className="border-b pb-2">
                        <div className="font-medium">{t('plan.transportation.phiPhiToLanta')}</div>
                        <div className="grid grid-cols-2 mt-1 text-sm">
                          <div className="text-gray-500">{t('plan.transportation.departure')}</div>
                          <div>11:30, 14:00</div>
                        </div>
                      </div>
                      
                      <div className="border-b pb-2">
                        <div className="font-medium">{t('plan.transportation.lantaToKrabi')}</div>
                        <div className="grid grid-cols-2 mt-1 text-sm">
                          <div className="text-gray-500">{t('plan.transportation.departure')}</div>
                          <div>08:00, 13:00, 15:00</div>
                        </div>
                      </div>
                    </div>
                    
                    <p className="text-sm text-gray-500 mt-4">{t('plan.transportation.scheduleNote')}</p>
                    
                    <Button className="w-full mt-4">
                      {t('plan.transportation.fullSchedule')}
                    </Button>
                  </CardContent>
                </Card>
              </div>
            </div>
          </TabsContent>
          
          <TabsContent value="on-island" className="mt-6">
            <div className="grid md:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>{t('plan.transportation.rentals')}</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex items-start gap-3 p-3 border rounded-md">
                      <div className="bg-primary/10 p-2 rounded-full">
                        <Car className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <h4 className="font-semibold">{t('plan.transportation.motorbike')}</h4>
                        <p className="text-sm text-gray-600 mt-1">{t('plan.transportation.motorbikeDescription')}</p>
                        <div className="mt-2 text-sm font-medium">
                          {formatCurrency(8)} - {formatCurrency(15)} / {t('plan.transportation.day')}
                        </div>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-3 p-3 border rounded-md">
                      <div className="bg-primary/10 p-2 rounded-full">
                        <Car className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <h4 className="font-semibold">{t('plan.transportation.car')}</h4>
                        <p className="text-sm text-gray-600 mt-1">{t('plan.transportation.carDescription')}</p>
                        <div className="mt-2 text-sm font-medium">
                          {formatCurrency(30)} - {formatCurrency(50)} / {t('plan.transportation.day')}
                        </div>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-3 p-3 border rounded-md">
                      <div className="bg-primary/10 p-2 rounded-full">
                        <Bus className="h-5 w-5 text-primary" />
                      </div>
                      <div>
                        <h4 className="font-semibold">{t('plan.transportation.tuktuk')}</h4>
                        <p className="text-sm text-gray-600 mt-1">{t('plan.transportation.tuktukDescription')}</p>
                        <div className="mt-2 text-sm font-medium">
                          {formatCurrency(5)} - {formatCurrency(15)} / {t('plan.transportation.trip')}
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <CardTitle>{t('plan.transportation.tips')}</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="bg-primary/5 p-4 rounded-md">
                      <h4 className="font-semibold mb-2">{t('plan.transportation.safety')}</h4>
                      <ul className="text-sm space-y-1 list-disc pl-5">
                        <li>{t('plan.transportation.safetyTip1')}</li>
                        <li>{t('plan.transportation.safetyTip2')}</li>
                        <li>{t('plan.transportation.safetyTip3')}</li>
                      </ul>
                    </div>
                    
                    <div className="bg-secondary/10 p-4 rounded-md">
                      <h4 className="font-semibold mb-2">{t('plan.transportation.saving')}</h4>
                      <ul className="text-sm space-y-1 list-disc pl-5">
                        <li>{t('plan.transportation.savingTip1')}</li>
                        <li>{t('plan.transportation.savingTip2')}</li>
                        <li>{t('plan.transportation.savingTip3')}</li>
                      </ul>
                    </div>
                    
                    <div className="border p-4 rounded-md">
                      <h4 className="font-semibold mb-2">{t('plan.transportation.distances')}</h4>
                      <div className="text-sm space-y-2">
                        <div className="flex justify-between">
                          <span>{t('plan.transportation.northToSouth')}</span>
                          <span>27 km</span>
                        </div>
                        <div className="flex justify-between">
                          <span>{t('plan.transportation.saladan')} ➝ {t('plan.transportation.longBeach')}</span>
                          <span>3 km</span>
                        </div>
                        <div className="flex justify-between">
                          <span>{t('plan.transportation.longBeach')} ➝ {t('plan.transportation.klongNin')}</span>
                          <span>8 km</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default TransportationGuide;
