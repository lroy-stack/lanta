
import React from 'react';
import { useLanguage } from '../../contexts/LanguageContext';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { 
  AlertCircle, 
  CreditCard, 
  Wifi, 
  Phone, 
  StethoscopeIcon, 
  CalendarCheck, 
  DollarSign, 
  Plug, 
  Globe 
} from 'lucide-react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const PracticalInformation = () => {
  const { t, language } = useLanguage();

  return (
    <div className="bg-white shadow-lg rounded-xl p-6">
      <div>
        <Tabs defaultValue="visa" className="w-full">
          <TabsList className="grid grid-cols-2 md:grid-cols-5 w-full">
            <TabsTrigger value="visa">
              <CalendarCheck className="h-4 w-4 mr-2" />
              {t('plan.practical.visa')}
            </TabsTrigger>
            <TabsTrigger value="health">
              <StethoscopeIcon className="h-4 w-4 mr-2" />
              {t('plan.practical.health')}
            </TabsTrigger>
            <TabsTrigger value="money">
              <DollarSign className="h-4 w-4 mr-2" />
              {t('plan.practical.money')}
            </TabsTrigger>
            <TabsTrigger value="connectivity">
              <Wifi className="h-4 w-4 mr-2" />
              {t('plan.practical.connectivity')}
            </TabsTrigger>
            <TabsTrigger value="utilities">
              <Plug className="h-4 w-4 mr-2" />
              {t('plan.practical.utilities')}
            </TabsTrigger>
          </TabsList>
          
          <TabsContent value="visa" className="mt-6">
            <Card>
              <CardHeader>
                <CardTitle>{t('plan.practical.visaRequirements')}</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  <div className="flex gap-4">
                    <div className="w-24 h-24 flex-shrink-0 bg-primary/10 flex items-center justify-center rounded-md">
                      <Globe className="h-12 w-12 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg mb-2">{t('plan.practical.visaOnArrival')}</h3>
                      <p className="text-sm text-gray-600 mb-3">
                        {t('plan.practical.visaOnArrivalDescription')}
                      </p>
                      <div className="grid grid-cols-2 gap-2">
                        <div className="bg-gray-50 p-3 rounded-md">
                          <div className="text-sm font-medium">{t('plan.practical.validity')}</div>
                          <div className="text-lg font-bold">30 {t('plan.practical.days')}</div>
                        </div>
                        <div className="bg-gray-50 p-3 rounded-md">
                          <div className="text-sm font-medium">{t('plan.practical.fee')}</div>
                          <div className="text-lg font-bold">฿2,000</div>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="border-t pt-4">
                    <h3 className="font-semibold mb-3">{t('plan.practical.requiredDocuments')}</h3>
                    <ul className="space-y-2">
                      <li className="flex items-start gap-2">
                        <AlertCircle className="h-5 w-5 text-primary mt-0.5" />
                        <div>
                          <div className="font-medium">{t('plan.practical.passport')}</div>
                          <p className="text-sm text-gray-600">{t('plan.practical.passportDescription')}</p>
                        </div>
                      </li>
                      <li className="flex items-start gap-2">
                        <AlertCircle className="h-5 w-5 text-primary mt-0.5" />
                        <div>
                          <div className="font-medium">{t('plan.practical.photo')}</div>
                          <p className="text-sm text-gray-600">{t('plan.practical.photoDescription')}</p>
                        </div>
                      </li>
                      <li className="flex items-start gap-2">
                        <AlertCircle className="h-5 w-5 text-primary mt-0.5" />
                        <div>
                          <div className="font-medium">{t('plan.practical.proofOfFunds')}</div>
                          <p className="text-sm text-gray-600">{t('plan.practical.proofOfFundsDescription')}</p>
                        </div>
                      </li>
                    </ul>
                  </div>
                  
                  <div className="bg-yellow-50 p-4 rounded-md">
                    <div className="font-semibold mb-2">{t('plan.practical.visaExtension')}</div>
                    <p className="text-sm">{t('plan.practical.visaExtensionDescription')}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="health" className="mt-6">
            <Card>
              <CardHeader>
                <CardTitle>{t('plan.practical.healthSafety')}</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h3 className="font-semibold mb-3">{t('plan.practical.vaccinations')}</h3>
                      <ul className="space-y-2">
                        <li className="flex items-start gap-2">
                          <div className="h-5 w-5 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                            <span className="text-green-600 text-xs">✓</span>
                          </div>
                          <div>
                            <div className="font-medium">{t('plan.practical.typhoid')}</div>
                            <p className="text-sm text-gray-600">{t('plan.practical.typhoidDescription')}</p>
                          </div>
                        </li>
                        <li className="flex items-start gap-2">
                          <div className="h-5 w-5 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                            <span className="text-green-600 text-xs">✓</span>
                          </div>
                          <div>
                            <div className="font-medium">{t('plan.practical.hepatitisA')}</div>
                            <p className="text-sm text-gray-600">{t('plan.practical.hepatitisADescription')}</p>
                          </div>
                        </li>
                        <li className="flex items-start gap-2">
                          <div className="h-5 w-5 rounded-full bg-yellow-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                            <span className="text-yellow-600 text-xs">!</span>
                          </div>
                          <div>
                            <div className="font-medium">{t('plan.practical.hepatitisB')}</div>
                            <p className="text-sm text-gray-600">{t('plan.practical.hepatitisBDescription')}</p>
                          </div>
                        </li>
                      </ul>
                    </div>
                    
                    <div>
                      <h3 className="font-semibold mb-3">{t('plan.practical.medicalFacilities')}</h3>
                      <div className="space-y-3">
                        <div className="p-3 border rounded-md">
                          <div className="font-medium">Koh Lanta Hospital</div>
                          <div className="text-sm text-gray-600 mt-1">
                            <div>Moo 1, Lanta Yai, Koh Lanta</div>
                            <div className="flex items-center gap-1 mt-1">
                              <Phone className="h-3 w-3" /> +66 75 697 100
                            </div>
                          </div>
                        </div>
                        
                        <div className="p-3 border rounded-md">
                          <div className="font-medium">First Standard Clinic</div>
                          <div className="text-sm text-gray-600 mt-1">
                            <div>Saladan Pier, Koh Lanta</div>
                            <div className="flex items-center gap-1 mt-1">
                              <Phone className="h-3 w-3" /> +66 89 723 3922
                            </div>
                          </div>
                        </div>
                      </div>
                      
                      <div className="mt-4 bg-blue-50 p-3 rounded-md">
                        <div className="font-semibold">{t('plan.practical.insurance')}</div>
                        <p className="text-sm mt-1">{t('plan.practical.insuranceDescription')}</p>
                      </div>
                    </div>
                  </div>
                  
                  <div>
                    <h3 className="font-semibold mb-3">{t('plan.practical.safetyTips')}</h3>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      <div className="p-3 bg-gray-50 rounded-md">
                        <div className="font-medium mb-2">{t('plan.practical.water')}</div>
                        <p className="text-sm text-gray-600">{t('plan.practical.waterDescription')}</p>
                      </div>
                      <div className="p-3 bg-gray-50 rounded-md">
                        <div className="font-medium mb-2">{t('plan.practical.sun')}</div>
                        <p className="text-sm text-gray-600">{t('plan.practical.sunDescription')}</p>
                      </div>
                      <div className="p-3 bg-gray-50 rounded-md">
                        <div className="font-medium mb-2">{t('plan.practical.marine')}</div>
                        <p className="text-sm text-gray-600">{t('plan.practical.marineDescription')}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="money" className="mt-6">
            <Card>
              <CardHeader>
                <CardTitle>{t('plan.practical.moneyMatters')}</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  <div className="grid md:grid-cols-3 gap-4">
                    <div className="p-4 border rounded-md">
                      <div className="flex items-center justify-center h-12 w-12 rounded-full bg-primary/10 mx-auto mb-3">
                        <DollarSign className="h-6 w-6 text-primary" />
                      </div>
                      <div className="text-center">
                        <h3 className="font-semibold">{t('plan.practical.currency')}</h3>
                        <p className="mt-2 text-sm">{t('plan.practical.currencyDescription')}</p>
                        <div className="mt-3 text-lg font-bold">1 USD ≈ 35 THB</div>
                      </div>
                    </div>
                    
                    <div className="p-4 border rounded-md">
                      <div className="flex items-center justify-center h-12 w-12 rounded-full bg-primary/10 mx-auto mb-3">
                        <CreditCard className="h-6 w-6 text-primary" />
                      </div>
                      <div className="text-center">
                        <h3 className="font-semibold">{t('plan.practical.cards')}</h3>
                        <p className="mt-2 text-sm">{t('plan.practical.cardsDescription')}</p>
                        <div className="mt-3 text-xs space-x-1">
                          <span className="py-1 px-2 bg-blue-100 rounded">VISA</span>
                          <span className="py-1 px-2 bg-red-100 rounded">MASTERCARD</span>
                        </div>
                      </div>
                    </div>
                    
                    <div className="p-4 border rounded-md">
                      <div className="flex items-center justify-center h-12 w-12 rounded-full bg-primary/10 mx-auto mb-3">
                        <AlertCircle className="h-6 w-6 text-primary" />
                      </div>
                      <div className="text-center">
                        <h3 className="font-semibold">{t('plan.practical.atms')}</h3>
                        <p className="mt-2 text-sm">{t('plan.practical.atmsDescription')}</p>
                        <div className="mt-3 text-sm font-medium text-red-500">
                          {t('plan.practical.atmFee')}: 220 THB
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div>
                    <h3 className="font-semibold mb-3">{t('plan.practical.costs')}</h3>
                    <div className="overflow-x-auto">
                      <table className="min-w-full border-collapse">
                        <thead>
                          <tr>
                            <th className="px-4 py-2 border bg-gray-50 text-left">{t('plan.practical.item')}</th>
                            <th className="px-4 py-2 border bg-gray-50 text-right">{t('plan.practical.budget')}</th>
                            <th className="px-4 py-2 border bg-gray-50 text-right">{t('plan.practical.midRange')}</th>
                            <th className="px-4 py-2 border bg-gray-50 text-right">{t('plan.practical.luxury')}</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td className="px-4 py-2 border">{t('plan.practical.accommodation')}</td>
                            <td className="px-4 py-2 border text-right">500-800 THB</td>
                            <td className="px-4 py-2 border text-right">800-2,000 THB</td>
                            <td className="px-4 py-2 border text-right">2,000+ THB</td>
                          </tr>
                          <tr>
                            <td className="px-4 py-2 border">{t('plan.practical.meal')}</td>
                            <td className="px-4 py-2 border text-right">60-120 THB</td>
                            <td className="px-4 py-2 border text-right">120-300 THB</td>
                            <td className="px-4 py-2 border text-right">300+ THB</td>
                          </tr>
                          <tr>
                            <td className="px-4 py-2 border">{t('plan.practical.transport')}</td>
                            <td className="px-4 py-2 border text-right">200-300 THB</td>
                            <td className="px-4 py-2 border text-right">300-500 THB</td>
                            <td className="px-4 py-2 border text-right">500+ THB</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                  
                  <div className="bg-yellow-50 p-4 rounded-md">
                    <h3 className="font-semibold mb-2">{t('plan.practical.tipping')}</h3>
                    <p className="text-sm">{t('plan.practical.tippingDescription')}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="connectivity" className="mt-6">
            <Card>
              <CardHeader>
                <CardTitle>{t('plan.practical.stayingConnected')}</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h3 className="font-semibold mb-3">{t('plan.practical.internet')}</h3>
                      <div className="space-y-3">
                        <div className="p-3 border rounded-md">
                          <div className="font-medium">{t('plan.practical.wifi')}</div>
                          <p className="text-sm text-gray-600 mt-1">
                            {t('plan.practical.wifiDescription')}
                          </p>
                          <div className="flex items-center gap-1 mt-2 text-sm text-primary font-medium">
                            <Wifi className="h-4 w-4" />
                            {t('plan.practical.wifiAvailability')}
                          </div>
                        </div>
                        
                        <div className="p-3 border rounded-md">
                          <div className="font-medium">{t('plan.practical.mobileData')}</div>
                          <p className="text-sm text-gray-600 mt-1">
                            {t('plan.practical.mobileDataDescription')}
                          </p>
                          <div className="grid grid-cols-2 gap-2 mt-3">
                            <div className="bg-gray-50 p-2 rounded text-sm">
                              <div>DTAC Tourist SIM</div>
                              <div className="font-medium mt-1">300-500 THB</div>
                            </div>
                            <div className="bg-gray-50 p-2 rounded text-sm">
                              <div>AIS Tourist SIM</div>
                              <div className="font-medium mt-1">300-600 THB</div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    <div>
                      <h3 className="font-semibold mb-3">{t('plan.practical.communication')}</h3>
                      <div className="space-y-3">
                        <div className="p-3 border rounded-md">
                          <div className="font-medium">{t('plan.practical.phoneCalls')}</div>
                          <p className="text-sm text-gray-600 mt-1">
                            {t('plan.practical.phoneCallsDescription')}
                          </p>
                          <div className="mt-2 text-sm">
                            {t('plan.practical.countryCode')}: <span className="font-medium">+66</span>
                          </div>
                        </div>
                        
                        <div className="p-3 border rounded-md">
                          <div className="font-medium">{t('plan.practical.apps')}</div>
                          <p className="text-sm text-gray-600 mt-1">
                            {t('plan.practical.appsDescription')}
                          </p>
                          <div className="flex flex-wrap gap-2 mt-3">
                            <span className="bg-gray-100 px-2 py-1 rounded text-xs">LINE</span>
                            <span className="bg-gray-100 px-2 py-1 rounded text-xs">WhatsApp</span>
                            <span className="bg-gray-100 px-2 py-1 rounded text-xs">Grab</span>
                            <span className="bg-gray-100 px-2 py-1 rounded text-xs">Google Maps</span>
                          </div>
                        </div>
                      </div>
                      
                      <div className="mt-4 bg-blue-50 p-3 rounded-md">
                        <div className="font-semibold">{t('plan.practical.offline')}</div>
                        <p className="text-sm mt-1">{t('plan.practical.offlineDescription')}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="utilities" className="mt-6">
            <Card>
              <CardHeader>
                <CardTitle>{t('plan.practical.utilities')}</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="p-4 border rounded-md">
                      <div className="flex items-center justify-center h-12 w-12 rounded-full bg-primary/10 mx-auto mb-3">
                        <Plug className="h-6 w-6 text-primary" />
                      </div>
                      <div className="text-center">
                        <h3 className="font-semibold">{t('plan.practical.electricity')}</h3>
                        <div className="mt-3 font-medium">220V / 50Hz</div>
                        <p className="mt-2 text-sm">{t('plan.practical.electricityDescription')}</p>
                      </div>
                    </div>
                    
                    <div className="p-4 border rounded-md">
                      <div className="flex items-center justify-center h-12 w-12 rounded-full bg-primary/10 mx-auto mb-3">
                        <Globe className="h-6 w-6 text-primary" />
                      </div>
                      <div className="text-center">
                        <h3 className="font-semibold">{t('plan.practical.language')}</h3>
                        <div className="mt-3 font-medium">Thai, English</div>
                        <p className="mt-2 text-sm">{t('plan.practical.languageDescription')}</p>
                      </div>
                    </div>
                    
                    <div className="p-4 border rounded-md">
                      <div className="flex items-center justify-center h-12 w-12 rounded-full bg-primary/10 mx-auto mb-3">
                        <Phone className="h-6 w-6 text-primary" />
                      </div>
                      <div className="text-center">
                        <h3 className="font-semibold">{t('plan.practical.emergency')}</h3>
                        <div className="mt-3 space-y-2">
                          <div>
                            <div className="text-sm">{t('plan.practical.tourist')}</div>
                            <div className="font-medium">1155</div>
                          </div>
                          <div>
                            <div className="text-sm">{t('plan.practical.police')}</div>
                            <div className="font-medium">191</div>
                          </div>
                          <div>
                            <div className="text-sm">{t('plan.practical.medical')}</div>
                            <div className="font-medium">1669</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default PracticalInformation;
